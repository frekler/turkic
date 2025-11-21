import { Language } from '@/app/types';

export const translations = {
  // Main page
  title: {
    ru: "Тюрки, Руны, Waleke....",
    tr: "Türkler, Runlar, Waleke...."
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
    ru: "За разгаданную руну - 1 удар по Демонам. Неправильный ответ - это ваша полученная рана. На 4-ой ране (а в сложном режиме - на 7-й ране) бой начинается заново.",
    tr: "Çözülen rune için Şeytanlara 1 vuruş. Yanlış cevap aldığınız yaranızdır. 4. yarada (zor modda 7. yarada) savaş yeniden başlar."
  },
  rule3: {
    ru: "В результате битвы вам надо получать стрелы и стать Каганом, - достигнув этого - получите ДАР.",
    tr: "Savaş sonucunda oklar toplamalı ve Kağan olmalısınız - bunu başararak HEDİYE alacaksınız."
  },
  startButton: {
    ru: "Начать бой с Демонами!",
    // tr: "Savaşı başlat!"
    tr: "Şeytanlarla savaşa başla!"

  },
  wisdomText: {
    ru: "Пусть мудрость предков ведёт вас по пути знаний",
    tr: "Ataların bilgeliği sizi bilgi yolunda yönlendirsin"
  },
  quote: {
    // ru: "\"Ночь не проходила, день не заканчивался, без того, чтобы красная кровь не проливалась, без того, чтобы чёрный пот не бежал...\". Мудрый Тоньюкук, строка 52.",
    ru: "\"Ночь не проходила, день не заканчивался, без того, чтобы не лилась кровь, без того, чтобы не тёк чёрный пот...\" Мудрый Тоньюкук, стих 52.",
    // tr: "\"Gece geçmez, gün bitmezdi ki, kızıl kan dökülmesin, kara ter akmasın...\". Bilge Tonyukuk, satır 52."
    tr: "\"Gece geçmedi, gün bitmedi, kan akmadı, kara ter akmadı...\" Bilge Tonyukuk, 52. ayet."
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
    ru: "Удары Демонам",
    tr: "Şeytanlara vuruşlar"
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
    ru: "Битва завершена!",
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
  // selectLanguage: {
  //   ru: "Выберите язык",
  //   tr: "Dil seçin"
  // },
  // russian: {
  //   ru: "Русский",
  //   tr: "Rusça"
  // },
  // turkish: {
  //   ru: "Турецкий", 
  //   tr: "Türkçe"
  // },


    russian: {
    ru: "На русском",
    tr: "На русском"
  },
  turkish: {
    ru: "Türkçe'de", 
    tr: "Türkçe'de"
  },

  // Quiz mode selector
  selectMode: {
    ru: "Выберите режим игры",
    tr: "Oyun modunu seçin"
  },
  selectModeDescription: {
    ru: "Как вы хотите играть?",
    tr: "Nasıl oynamak istiyorsunuz?"
  },
  shuffledMode: {
    ru: "Случайный порядок",
    tr: "Rastgele sıra"
  },
  shuffledModeDescription: {
    ru: "Руны будут показаны в случайном порядке для большего вызова",
    tr: "Runlar daha fazla meydan okuma için rastgele sırada gösterilecek"
  },
  chooseShuffled: {
    ru: "Играть вразброс",
    tr: "Rastgele oyna"
  },
  orderedMode: {
    ru: "По порядку",
    tr: "Sırayla"
  },
  orderedModeDescription: {
    ru: "Руны будут показаны в исходном порядке для изучения",
    tr: "Runlar öğrenme için orijinal sırada gösterilecek"
  },
  chooseOrdered: {
    ru: "Играть по порядку",
    tr: "Sırayla oyna"
  },

  // Toggle labels
  shuffleToggle: {
    ru: "Перемешать руны",
    tr: "Rünleri karıştır"
  },
  modeToggle: {
    ru: "Сложный режим",
    tr: "Zor mod"
  }
};

export function getTranslation(key: keyof typeof translations, language: Language): string {
  return translations[key][language];
}