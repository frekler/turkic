export interface Answer {
  label: string;
  correct?: boolean;
}

export interface Question {
  id: number;
  text: string;
}

export interface LocalizedText {
  ru: string;
  tr: string;
}

export interface LocalizedQuestion {
  id: number;
  text: LocalizedText;
}

export type Language = 'ru' | 'tr';

export interface QuestionWithAnswers {
  text: string;
  answers: Answer[];
}

export interface LocalizedQuestionWithAnswers {
  text: LocalizedText;
  answers: Answer[];
}

export interface CardData {
  id: string;
  image: string;
  title: string;
  answersByQuestion?: Answer[][];
  questions?: QuestionWithAnswers[];
}

export interface ClientCardData {
  id: string;
  image: string;
  title: string;
  questions: QuestionWithAnswers[];
}

export interface ClickedAnswers {
  [key: string]: 'correct' | 'wrong';
}

export type Stage = 'quiz' | 'name' | 'done';

export interface QuizResponse {
  deck: ClientCardData[];
  questionsCount: number;
}

export interface ValidationResponse {
  correct: boolean;
  correctAnswer: string;
}