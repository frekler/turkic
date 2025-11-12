'use client';

import Link from 'next/link';
import Button from '@/app/components/Button';
import Toggle from '@/app/components/Toggle';
import Image from 'next/image';
import LanguageSelector from '@/app/components/LanguageSelector';
import { Language } from '@/app/types';
import { getTranslation } from '@/app/data/translations';
import { useState } from 'react';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('ru');
  const [shuffleEnabled, setShuffleEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100/80 p-8">
      <main className="max-w-4xl mx-auto">

        <LanguageSelector 
          selectedLanguage={selectedLanguage} 
          onLanguageChange={setSelectedLanguage} 
        />

        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif font-bold text-stone-800 mb-6 tracking-wide">
            {getTranslation('title', selectedLanguage)}
          </h1>
          <Image src="/hero.png" alt={getTranslation('title', selectedLanguage)} width={1280} height={962} />
          <div className="w-32 h-1 bg-amber-600 mx-auto my-13"></div>
          <p className="text-xl text-stone-600 font-serif italic">
            {getTranslation('subtitle', selectedLanguage)}
          </p>
        </div>



        <div className="bg-stone-50 border-2 border-stone-300 shadow-2xl p-12 mb-12 relative">
          {/* Ancient manuscript corner decorations */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-600"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-600"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-600"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-600"></div>
          
          {/* <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8 text-center border-b-2 border-amber-600 pb-4">
            Испытание знаний
          </h2> */}
          
          <div className="space-y-6 text-stone-700 mb-10">
            <p className="text-lg font-serif leading-relaxed text-center">
              {getTranslation('quote', selectedLanguage)}
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-600 p-8 my-8">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-6 text-center">
                {getTranslation('rulesTitle', selectedLanguage)}
              </h3>
              <div className="grid gap-4">
                <ul className="space-y-3 text-amber-800 font-serif">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 font-bold">1.</span>
                    {getTranslation('rule1', selectedLanguage)}
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 font-bold">2.</span>
                    {getTranslation('rule2', selectedLanguage)}
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 font-bold">3.</span>
                    {getTranslation('rule3', selectedLanguage)}
                  </li>
                </ul>
                {/* <ul className="space-y-3 text-amber-800 font-serif">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 font-bold">IV.</span>
                    При четвёртой ошибке — новое испытание
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 font-bold">V.</span>
                    За точность — почёт и стрелы
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 font-bold">VI.</span>
                    В конце — код для получения дара
                  </li>
                </ul> */}
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <Toggle
              checked={shuffleEnabled}
              onChange={setShuffleEnabled}
              label={getTranslation('shuffleToggle', selectedLanguage)}
            />
            
            <Link href={`/quiz?lang=${selectedLanguage}&shuffle=${shuffleEnabled}`}>
              <Button 
                className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-12 py-4 text-xl font-serif font-bold border-2 border-amber-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {getTranslation('startButton', selectedLanguage)}
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-stone-500 font-serif italic">
            {getTranslation('wisdomText', selectedLanguage)}
          </p>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-4"></div>
        </div>
      </main>
    </div>
  );
}
