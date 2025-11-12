import { NextRequest, NextResponse } from 'next/server';
import { serverCardsData } from '@/app/data/server-data';
import { serverCardsData as serverCardsDataTr } from '@/app/data/server-data-tr';
import { Language } from '@/app/types';

export async function POST(request: NextRequest) {
  try {
    const { cardId, questionIndex, answerLabel, language } = await request.json();

    if (
      typeof cardId !== 'string' ||
      typeof questionIndex !== 'number' ||
      typeof answerLabel !== 'string'
    ) {
      return NextResponse.json(
        { error: 'Invalid request parameters' },
        { status: 400 }
      );
    }

    const lang = language as Language || 'ru';
    const cardsData = lang === 'tr' ? serverCardsDataTr : serverCardsData;

    const card = cardsData.find(c => c.id === cardId);
    if (!card) {
      return NextResponse.json(
        { error: 'Invalid card ID' },
        { status: 400 }
      );
    }

    if (!card.answersByQuestion) {
      return NextResponse.json(
        { error: 'Card has no answers data' },
        { status: 400 }
      );
    }

    const questionAnswers = card.answersByQuestion[questionIndex];
    if (!questionAnswers) {
      return NextResponse.json(
        { error: 'Invalid question index' },
        { status: 400 }
      );
    }

    const selectedAnswer = questionAnswers.find(a => a.label === answerLabel);
    if (!selectedAnswer) {
      return NextResponse.json(
        { error: 'Invalid answer label' },
        { status: 400 }
      );
    }

    const correctAnswer = questionAnswers.find(a => a.correct);

    return NextResponse.json({
      correct: selectedAnswer.correct,
      correctAnswer: correctAnswer?.label || ''
    });
  } catch (error) {
    console.error('Error validating answer:', error);
    return NextResponse.json(
      { error: 'Failed to validate answer' },
      { status: 500 }
    );
  }
}