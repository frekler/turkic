'use client';

import Button from './Button';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ClientCardData, ClickedAnswers, Stage, QuizResponse, ValidationResponse, Language } from '@/app/types';
import { getTranslation } from '@/app/data/translations';

interface CardProps {
  language?: Language;
  shuffle?: boolean | null;
}

export default function Card({ language = 'ru', shuffle = true }: CardProps) {
  const [deck, setDeck] = useState<ClientCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [cardIdx, setCardIdx] = useState(0);
  const [revealedIdx, setRevealedIdx] = useState(0);
  const [mistakeOnQ, setMistakeOnQ] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState<Stage>('quiz');
  const [time, setTime] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [wrongCount, setWrongCount] = useState(0);
  const [name, setName] = useState('');
  const [resultCode, setResultCode] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [clickedAnswers, setClickedAnswers] = useState<ClickedAnswers>({});
  const [correctAnswers, setCorrectAnswers] = useState<{[key: string]: string}>({});

  const currentCard = deck[cardIdx];

  // const totalQuestions = useMemo(
  //   () => deck.reduce((acc, c) => acc + c.questions.length, 0),
  //   [deck]
  // );

  // const globalQuestionNumber = useMemo(() => {
  //   let before = 0;
  //   for (let i = 0; i < cardIdx; i++) before += deck[i]?.questions.length || 0;
  //   return before + revealedIdx + 1;
  // }, [deck, cardIdx, revealedIdx]);

  useEffect(() => {
    async function loadQuiz() {
      try {
        const shuffleParam = shuffle !== null ? shuffle : true;
        const response = await fetch(`/api/quiz?lang=${language}&shuffle=${shuffleParam}`);
        const data: QuizResponse = await response.json();
        setDeck(data.deck);
        setMistakeOnQ(Array.from({ length: data.questionsCount }, () => false));
        setLoading(false);
      } catch (error) {
        console.error('Failed to load quiz:', error);
        setLoading(false);
      }
    }
    loadQuiz();
  }, [language, shuffle]);

  useEffect(() => {
    if (stage !== 'quiz') return;
    const id = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [stage]);

  const resetCardState = () => {
    setRevealedIdx(0);
    setMistakeOnQ(prev => prev.map(() => false));
    setClickedAnswers({});
  };

  const resetQuiz = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/quiz?lang=${language}`);
      const data: QuizResponse = await response.json();
      setDeck(data.deck);
      setCardIdx(0);
      resetCardState();
      setScore(0);
      setStage('quiz');
      setTime(0);
      setFeedback('');
      setWrongCount(0);
      setName('');
      setResultCode(null);
      setSubmitting(false);
      setShowTable(false);
      setCorrectAnswers({});
      setMistakeOnQ(Array.from({ length: data.questionsCount }, () => false));
    } catch (error) {
      console.error('Failed to reset quiz:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (qIndex: number, answerLabel: string) => {
    if (stage !== 'quiz' || !currentCard) return;
    if (qIndex !== revealedIdx) return;

    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cardId: currentCard.id,
          questionIndex: qIndex,
          answerLabel,
          language
        }),
      });

      const result: ValidationResponse = await response.json();
      const isCorrect = result.correct;

      const key = `${cardIdx}-${qIndex}`;
      setClickedAnswers(prev => ({ ...prev, [`${key}-${answerLabel}`]: isCorrect ? 'correct' : 'wrong' }));
      setCorrectAnswers(prev => ({ ...prev, [key]: result.correctAnswer }));

      if (!isCorrect) {
        const nextWrong = wrongCount + 1;
        setWrongCount(nextWrong);
        setMistakeOnQ(prev => {
          const copy = prev.slice();
          copy[qIndex] = true;
          return copy;
        });
        setFeedback(`${getTranslation('incorrect', language)} (${nextWrong}/3).`);
        if (nextWrong >= 4) {
          setTimeout(() => {
            setFeedback('');
            resetQuiz();
          }, 1200);
        }
        return;
      }

      setScore(s => (!mistakeOnQ[qIndex] ? s + 1 : s));
      setFeedback(getTranslation('correct', language) + '!');

      setTimeout(() => {
        setFeedback('');
        const lastQuestionInCard = revealedIdx === currentCard.questions.length - 1;

        if (!lastQuestionInCard) {
          setRevealedIdx(revealedIdx + 1);
          return;
        }

        const lastCard = cardIdx === deck.length - 1;
        if (!lastCard) {
          setCardIdx(cardIdx + 1);
          resetCardState();
          return;
        }

        setStage('name');
      }, 700);
    } catch (error) {
      console.error('Failed to validate answer:', error);
      setFeedback(getTranslation('serverError', language));
    }
  };

  async function submitName() {
    if (!name.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || getTranslation('serverError', language));
      setResultCode(data.code);
      setStage('done');
    } catch (e) {
      alert((e as Error).message || (language === 'ru' ? 'Не удалось сохранить' : 'Kaydedilemedi'));
    } finally {
      setSubmitting(false);
    }
  }

  const closeOnEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setShowTable(false);
  }, []);

  useEffect(() => {
    if (!showTable) return;
    window.addEventListener('keydown', closeOnEsc);
    return () => window.removeEventListener('keydown', closeOnEsc);
  }, [showTable, closeOnEsc]);

  const completedQuestionsInCurrentCard = revealedIdx;
  const getFillCountForCard = (i: number) => {
    if (i < cardIdx) return deck[i]?.questions.length || 0;
    if (i === cardIdx) return completedQuestionsInCurrentCard;
    return 0;
  };

  if (loading) {
    return <div>{language === 'ru' ? 'Загрузка...' : 'Yüklüyor...'}</div>;
  }


  return (
    <>
      {stage !== 'done' && (
        <div className="bg-stone-50 border-2 border-amber-600 p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-amber-700 font-serif font-semibold text-sm">{getTranslation('rune', language)}</div>
              <div className="text-xl font-serif font-bold text-stone-800">{cardIdx + 1} / {deck.length}</div>
            </div>
            {/* <div className="text-center">
              <div className="text-amber-700 font-serif font-semibold text-sm">Вопрос</div>
              <div className="text-xl font-serif font-bold text-stone-800">{globalQuestionNumber} / {totalQuestions}</div>
            </div> */}
            <div className="text-center">
              <div className="text-amber-700 font-serif font-semibold text-sm">{getTranslation('time', language)}</div>
              <div className="text-xl font-serif font-bold text-stone-800">{time} {language === 'ru' ? 'с' : 's'}</div>
            </div>
            <div className="text-center">
              <div className="text-amber-700 font-serif font-semibold text-sm">{getTranslation('wounds', language)}</div>
              <div className="text-xl font-serif font-bold text-stone-800">{wrongCount} / 3</div>
            </div>
            <div className="text-center">
              <div className="text-amber-700 font-serif font-semibold text-sm">{getTranslation('arrows', language)}</div>
              <div className="text-xl font-serif font-bold text-stone-800">{score} {language === 'ru' ? 'шт.' : 'adet'}</div>
            </div>
                        <div className="text-center">
              <div className="text-amber-700 font-serif font-semibold text-sm">{getTranslation('status', language)}</div>
              <div className="text-xl font-serif font-bold text-stone-800">({language === 'ru' ? 'скоро' : 'yakında'})</div>
            </div>
          </div>
        </div>
      )}

      {stage === 'quiz' && currentCard && (
        <div className="bg-stone-50 border-2 border-stone-300 shadow-xl p-8 relative">
          {/* Ancient manuscript corner decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-600"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-600"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-600"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-600"></div>
          
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-amber-50 border-2 border-amber-600 shadow-lg">
              <Image 
                src={currentCard.image} 
                alt={currentCard.title || ''} 
                width={300}
                height={200}
                className="rounded" 
              />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-800 text-center mb-8 border-b-2 border-amber-600 pb-4">
{getTranslation('whichRune', language)}
          </h2>

          {currentCard.questions.slice(0, revealedIdx + 1).map((q, i) => {
            const isActive = i === revealedIdx;
            return (
              <div key={i} className={`mb-8 ${isActive ? 'border-l-4 border-amber-600 pl-6' : 'opacity-75'}`}>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 border-b border-amber-300 pb-2">
                  {q.text}
                </h3>
                <div className="grid gap-3">
                  {q.answers.map((ans, j) => {
                    const key = `${cardIdx}-${i}-${ans.label}`;
                    const state = clickedAnswers[key];
                    const questionAnswered = Object.keys(clickedAnswers).some(k => 
                      k.startsWith(`${cardIdx}-${i}-`) && clickedAnswers[k] === 'correct'
                    );
                    const disabled = !isActive || questionAnswered;
                    
                    let buttonClasses = 'w-full p-4 font-serif font-semibold border-2 transition-all duration-200 ';
                    if (state === 'correct') {
                      buttonClasses += 'bg-emerald-100 border-emerald-600 text-emerald-800';
                    } else if (state === 'wrong') {
                      buttonClasses += 'bg-red-100 border-red-600 text-red-800';
                    } else if (disabled) {
                      buttonClasses += 'bg-stone-200 border-stone-400 text-stone-600 cursor-not-allowed';
                    } else {
                      buttonClasses += 'bg-amber-50 border-amber-600 text-amber-900 hover:bg-amber-100 hover:shadow-md cursor-pointer';
                    }

                    return (
                      <Button
                        key={j}
                        onClick={() => {
                          if (disabled) return;
                          handleAnswer(i, ans.label);
                        }}
                        disabled={disabled}
                        className={buttonClasses}
                      >
                        {ans.label}
                      </Button>
                    );
                  })}
                </div>
                {!isActive && (
                  <div className="mt-3 text-center font-serif text-sm">
                    {mistakeOnQ[i] ? (
                      <span className="text-amber-700 font-semibold">⚠ {getTranslation('wounded', language)}</span>
                    ) : (
                      <span className="text-emerald-700 font-semibold">✓ {getTranslation('perfect', language)}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {feedback && (
            <div className="text-center mt-8 p-4 bg-amber-50 border-2 border-amber-600 font-serif font-bold text-amber-900">
              {feedback}
            </div>
          )}
          
          <div className="text-center mt-8">
            <button
              type="button"
              className="font-serif font-semibold text-amber-700 hover:text-amber-900 border-b border-amber-600 hover:border-amber-900 transition-colors"
              onClick={(e) => { e.preventDefault(); setShowTable(true); }}
            >
              {getTranslation('solvedRunes', language)}
            </button>
          </div>
        </div>
      )}

      {stage === 'name' && (
        <div className="bg-stone-50 border-2 border-amber-600 p-8 text-center shadow-lg">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
{getTranslation('warComplete', language)}
          </h2>
          <p className="text-lg font-serif text-stone-700 mb-8">
            {/* Вы успешно прошли все этапы изучения древнетюркского письма.
            <br /> */}
{getTranslation('enterTelegram', language)}
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={getTranslation('telegramPlaceholder', language)}
            className="w-full max-w-md mx-auto p-4 mb-6 font-serif text-lg border-2 border-amber-600 bg-amber-50 text-stone-800 placeholder-stone-500"
          />
          <Button 
            onClick={submitName} 
            disabled={submitting}
            className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-8 py-4 font-serif font-bold border-2 border-amber-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {submitting ? getTranslation('saving', language) : getTranslation('getGiftCode', language)}
          </Button>
        </div>
      )}

      {stage === 'done' && (
        <div className="bg-stone-50 border-2 border-amber-600 p-8 text-center shadow-lg">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
{getTranslation('done', language)}
          </h2>
          <div className="bg-amber-50 border-2 border-amber-600 p-6 mb-6">
            <p className="text-lg font-serif text-stone-700 mb-4">{getTranslation('yourGiftCode', language)}</p>
            <p className="text-3xl font-serif font-bold text-amber-900 tracking-wider">{resultCode}</p>
          </div>
          <div className="space-y-4 font-serif text-stone-700">
            <p className="text-lg">
              {getTranslation('saveCode', language)}
            </p>
            <p>
              {getTranslation('contactInfo', language)}
              <br />
              <a href="https://t.me/turk_donat_bot" className="text-amber-700 hover:text-amber-900 font-bold">
                @turk_donat_bot
              </a>
            </p>
            <p>
              {getTranslation('subscribeText', language)}
              <br />
              <a href="https://t.me/turkic_arck" className="text-amber-700 hover:text-amber-900 font-bold">
                {getTranslation('channelName', language)}
              </a>
            </p>
          </div>
        </div>
      )}

      {showTable && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowTable(false)}
        >
          <div
            className="bg-stone-50 border-4 border-amber-600 shadow-2xl p-8 w-full max-w-6xl max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Ancient manuscript corner decorations */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-600"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-600"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-600"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-600"></div>
            
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-stone-800 border-b-2 border-amber-600 pb-2">
                {getTranslation('solvedRunes', language)}
              </h3>
              <button 
                onClick={() => setShowTable(false)} 
                aria-label={getTranslation('close', language)}
                className="text-2xl text-amber-700 hover:text-amber-900 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-100 border-2 border-amber-600">
                    {/* <th className="p-4 text-left font-serif font-bold text-stone-800 border-r border-amber-600">№</th> */}
                    <th className="p-4 text-left font-serif font-bold text-stone-800 border-r border-amber-600">{getTranslation('rune', language)}</th>
                    {/* <th className="p-4 text-left font-serif font-bold text-stone-800 border-r border-amber-600">Гласная или согласная</th> */}
                    {/* <th className="p-4 text-left font-serif font-bold text-stone-800 border-r border-amber-600">Твердая, мягкая или двойная</th> */}
                    <th className="p-4 text-left font-serif font-bold text-stone-800">{getTranslation('sound', language)}</th>
                  </tr>
                </thead>
                <tbody>
                  {deck.map((c, i) => {
                    const fillCount = getFillCountForCard(i);
                    const reached = i <= cardIdx;

                    return (
                      <tr key={i} className="border-b border-amber-300 hover:bg-amber-50">
                        {/* <td className="p-4 text-center font-serif font-bold text-stone-800 border-r border-amber-300">
                          {i + 1}
                        </td> */}
                        <td className="p-4 border-r border-amber-300">
                          {reached ? (
                            <div className="flex justify-center">
                              <Image
                                src={c.image}
                                alt={c.title || `Карточка ${i + 1}`}
                                width={80}
                                height={53}
                                className="border border-amber-600 rounded"
                              />
                            </div>
                          ) : (
                            <span className="text-stone-400 font-serif">—</span>
                          )}
                        </td>

                        {[2].map(qi => (
                          <td key={qi} className="p-4 border-r border-amber-300 font-serif text-stone-800">
                            {fillCount > qi ? (
                              <span className="font-semibold">{correctAnswers[`${i}-${qi}`] || '—'}</span>
                            ) : (
                              <span className="text-stone-400">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowTable(false)}
                className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-8 py-3 font-serif font-bold border-2 border-amber-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {getTranslation('closeTable', language)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}