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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = (searchParams.get('lang') as Language) || 'ru';
    const shuffle = searchParams.get('shuffle') !== 'false'; // Default to true (shuffled)
    
    const QN = commonQuestions.length;
    const cardsData = language === 'tr' ? serverCardsDataTr : serverCardsData;
    
    const clientSafeData = cardsData.map((card) => {
      const questions = Array.from({ length: QN }).map((_, i) => ({
        text: localizedQuestions[i]?.text[language] ?? commonQuestions[i]?.text ?? `Вопрос ${i + 1}`,
        answers: shuffle 
          ? shuffleArray((card.answersByQuestion?.[i] || []).map(a => ({ label: a.label })))
          : (card.answersByQuestion?.[i] || []).map(a => ({ label: a.label })),
      }));
      return { 
        id: card.id,
        image: card.image, 
        title: card.title, 
        questions 
      };
    });

    const orderedByCardNumber = sortByCardNumber(clientSafeData);
    const deck = shuffle ? shuffleArray(orderedByCardNumber) : orderedByCardNumber;
    
    return NextResponse.json({ 
      deck,
      questionsCount: QN 
    });
  } catch (error) {
    console.error('Error generating quiz:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz' },
      { status: 500 }
    );
  }
}