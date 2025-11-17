import { NextResponse } from 'next/server';
import { serverCardsData } from '@/app/data/server-data';
import { serverCardsData as serverCardsDataTr } from '@/app/data/server-data-tr';
import { questions as commonQuestions } from '@/app/data/questions';
import { localizedQuestions } from '@/app/data/localized-questions';
import { Language } from '@/app/types';

function shuffleArray<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sortByCardNumber<T extends { id: string }>(arr: T[]): T[] {
  return arr.slice().sort((a, b) => {
    const numA = parseInt(a.id.replace('card-', ''));
    const numB = parseInt(b.id.replace('card-', ''));
    return numA - numB;
  });
}

function filterAnswersForEasyMode(answers: { label: string; correct: boolean }[]): { label: string }[] {
  const correctAnswer = answers.find(answer => answer.correct === true);
  const incorrectAnswers = answers.filter(answer => answer.correct === false);
  
  if (!correctAnswer || incorrectAnswers.length === 0) {
    return answers.map(a => ({ label: a.label }));
  }
  
  const randomIncorrectAnswer = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
  const twoAnswers = [correctAnswer, randomIncorrectAnswer];
  
  return shuffleArray(twoAnswers).map(a => ({ label: a.label }));
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = (searchParams.get('lang') as Language) || 'ru';
    const shuffle = searchParams.get('shuffle') !== 'false'; // Default to true (shuffled)
    const mode = searchParams.get('mode') || 'easy'; // Default to easy mode
    
    const cardsData = language === 'tr' ? serverCardsDataTr : serverCardsData;
    
    const clientSafeData = cardsData.map((card) => {
      const actualQuestionCount = card.answersByQuestion?.length || 0;
      const questions = Array.from({ length: actualQuestionCount }).map((_, i) => {
        const questionAnswers = card.answersByQuestion?.[i] || [];
        let processedAnswers;
        
        if (mode === 'easy') {
          processedAnswers = filterAnswersForEasyMode(questionAnswers as { label: string; correct: boolean }[]);
        } else {
          processedAnswers = shuffle 
            ? shuffleArray(questionAnswers.map(a => ({ label: a.label })))
            : questionAnswers.map(a => ({ label: a.label }));
        }
        
        return {
          text: localizedQuestions[i]?.text[language] ?? commonQuestions[i]?.text ?? `Вопрос ${i + 1}`,
          answers: processedAnswers,
        };
      });
      return { 
        id: card.id,
        image: card.image, 
        title: card.title, 
        questions 
      };
    });

    const orderedByCardNumber = sortByCardNumber(clientSafeData);
    const deck = shuffle ? shuffleArray(orderedByCardNumber) : orderedByCardNumber;
    
    const totalQuestionsCount = deck.reduce((acc, card) => acc + card.questions.length, 0);
    
    return NextResponse.json({ 
      deck,
      questionsCount: totalQuestionsCount 
    });
  } catch (error) {
    console.error('Error generating quiz:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz' },
      { status: 500 }
    );
  }
}