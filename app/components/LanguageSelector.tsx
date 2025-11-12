'use client';

import { Language } from '@/app/types';
import { getTranslation } from '@/app/data/translations';


interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export default function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="bg-stone-50 border-2 border-amber-600 p-6 mb-8 shadow-lg">
      <h3 className="text-xl font-serif font-bold text-amber-900 mb-4 text-center">
        {getTranslation('selectLanguage', selectedLanguage)}
      </h3>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => onLanguageChange('ru')}
          className={`px-6 py-3 font-serif font-semibold border-2 transition-all duration-200 ${
            selectedLanguage === 'ru'
              ? 'bg-amber-700 border-amber-800 text-amber-50 shadow-lg'
              : 'bg-amber-50 border-amber-600 text-amber-900 hover:bg-amber-100 hover:shadow-md'
          }`}
        >
          {getTranslation('russian', selectedLanguage)}
        </button>
        <button
          onClick={() => onLanguageChange('tr')}
          className={`px-6 py-3 font-serif font-semibold border-2 transition-all duration-200 ${
            selectedLanguage === 'tr'
              ? 'bg-amber-700 border-amber-800 text-amber-50 shadow-lg'
              : 'bg-amber-50 border-amber-600 text-amber-900 hover:bg-amber-100 hover:shadow-md'
          }`}
        >
          {getTranslation('turkish', selectedLanguage)}
        </button>
      </div>
    </div>
  );
}