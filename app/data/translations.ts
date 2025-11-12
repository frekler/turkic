import { Language } from '@/app/types';

export const translations = {
  // Main page
  title: {
    ru: "Тюрки, Руны, Wалеке...",
    tr: "Türkler, Runlar, Wалеке..."
  },
  subtitle: {
    ru: "Тюрк Битиг •••• Древнетюркское Письмо",
    tr: "Türk Bitigi •••• Eski Türk Yazısı"
  },
  rulesTitle: {
    ru: "Правила",
    tr: "Kurallar"
  },
  rule1: {
    ru: "Под изображением руны - отвечаете на вопросы.",
    tr: "Rune resmi altında sorulara cevap veriyorsunuz."
  },
  rule2: {
    ru: "За правильный ответ - 1 стрела. Неправильный ответ - это ваша рана. На 5-ой ране игра начинается заново.",
    tr: "Doğru cevap için 1 ok. Yanlış cevap yaranızdır. 5. yarada oyun yeniden başlar."
  },
  rule3: {
    ru: "В результате войны вам надо получать стрелы и стать Каганом, - достигнув этого - получите ДАР.",
    tr: "Savaş sonucunda oklar toplamalı ve Kağan olmalısınız - bunu başararak HEDİYE alacaksınız."
  },
  startButton: {
    ru: "Начать войну!",
    tr: "Savaşı başlat!"
  },
  wisdomText: {
    ru: "Пусть мудрость предков ведёт вас по пути знаний",
    tr: "Ataların bilgeliği sizi bilgi yolunda yönlendirsin"
  },
  quote: {
    ru: "\"Ночь не проходила, день не заканчивался, без того, чтобы красная кровь не проливалась, без того, чтобы чёрный пот не бежал...\". Мудрый Тоньюкук, строка 52.",
    tr: "\"Gece geçmez, gün bitmezdi ki, kızıl kan dökülmesin, kara ter akmasın...\". Bilge Tonyukuk, satır 52."
  },

  // Quiz interface
  rune: {
    ru: "Руна",
    tr: "Rune"
  },
  time: {
    ru: "Время",
    tr: "Süre"
  },
  wounds: {
    ru: "Полученные раны",
    tr: "Aldığınız yaralar"
  },
  arrows: {
    ru: "Ваши стрелы",
    tr: "Oklarınız"
  },
  status: {
    ru: "Ваш статус",
    tr: "Durumunuz"
  },
  whichRune: {
    ru: "Какая это руна?",
    tr: "Bu hangi rune?"
  },
  incorrect: {
    ru: "Неверно",
    tr: "Yanlış"
  },
  correct: {
    ru: "Верно!",
    tr: "Doğru!"
  },
  serverError: {
    ru: "Ошибка сервера",
    tr: "Sunucu hatası"
  },
  solvedRunes: {
    ru: "Таблица разгаданных рун",
    tr: "Çözülen runlar tablosu"
  },
  close: {
    ru: "Закрыть",
    tr: "Kapat"
  },
  sound: {
    ru: "Звук",
    tr: "Ses"
  },
  closeTable: {
    ru: "Закрыть таблицу",
    tr: "Tabloyu kapat"
  },
  perfect: {
    ru: "Безупречно",
    tr: "Mükemmel"
  },
  wounded: {
    ru: "Были раны",
    tr: "Yaralandı"
  },

  // End game
  warComplete: {
    ru: "Война завершена!",
    tr: "Savaş tamamlandı!"
  },
  enterTelegram: {
    ru: "Укажите своё имя пользователя в Telegram (напр., @turkic) для получения кода дара.",
    tr: "Hediye kodunu almak için Telegram kullanıcı adınızı girin (örn. @turkic)."
  },
  telegramPlaceholder: {
    ru: "Ваше имя пользователя в Telegram",
    tr: "Telegram kullanıcı adınız"
  },
  getGiftCode: {
    ru: "Получить код дара",
    tr: "Hediye kodunu al"
  },
  saving: {
    ru: "Сохранение…",
    tr: "Kaydediliyor…"
  },
  done: {
    ru: "Готово!",
    tr: "Tamamlandı!"
  },
  yourGiftCode: {
    ru: "Ваш код ДАРа:",
    tr: "Hediye kodunuz:"
  },
  saveCode: {
    ru: "Пожалуйста, сохраните этот код!",
    tr: "Lütfen bu kodu kaydedin!"
  },
  contactInfo: {
    ru: "Для получения подарка свяжитесь с нами c указанного на прошлом шаге аккаунта в Telegram и сообщите код:",
    tr: "Hediyeyi almak için önceki adımda belirtilen Telegram hesabınızdan bizimle iletişime geçin ve kodu bildirin:"
  },
  subscribeText: {
    ru: "Также подпишитесь на наш канал:",
    tr: "Ayrıca kanalımıza abone olun:"
  },
  channelName: {
    ru: "Тюркский Архетип",
    tr: "Türk Arketipi"
  },

  // Language selector
  selectLanguage: {
    ru: "Выберите язык",
    tr: "Dil seçin"
  },
  russian: {
    ru: "Русский",
    tr: "Rusça"
  },
  turkish: {
    ru: "Турецкий", 
    tr: "Türkçe"
  }
};

export function getTranslation(key: keyof typeof translations, language: Language): string {
  return translations[key][language];
}