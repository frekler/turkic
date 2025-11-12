'use client';

import Card from '@/app/components/Card';
import Link from 'next/link';
import { Language } from '@/app/types';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function QuizContent() {
  const searchParams = useSearchParams();
  const language = (searchParams.get('lang') as Language) || 'ru';
  const shuffle = searchParams.get('shuffle') !== 'false'; // Default to true

  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <main className="max-w-4xl mx-auto">
        <Link 
            href="/" 
            className="text-amber-700 hover:text-amber-900 transition-colors flex items-center font-serif font-semibold mb-5"
          >
            ← {language === 'ru' ? 'Вернуться к правилам' : 'Kurallara dön'}
          </Link>
        <div className="flex items-center justify-between mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-stone-800 tracking-wide">
              {language === 'ru' ? 'Война' : 'Savaş'}
            </h1>
            <div className="w-16 h-1 bg-amber-600 mx-auto mt-2"></div>
          </div>
          <div className="w-40"></div> {/* Spacer for centering */}
        </div>
        
        <Card language={language} shuffle={shuffle} />
      </main>
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizContent />
    </Suspense>
  );
}