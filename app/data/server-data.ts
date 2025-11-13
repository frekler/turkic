import { CardData } from '@/app/types';

export const serverCardsData: CardData[] = [

  {
    id: "card-01",
    image: "/01.jpeg",
    title: "Карточка 1",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: true },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твердая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "Ө", correct: true },
        { label: "И", correct: false },
        { label: "Э", correct: false },
      ],
    ],
  },

  {
    id: "card-02",
    image: "/02.jpeg",
    title: "Карточка 2",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АН", correct: true },
        { label: "МА", correct: false },
        { label: "НЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-03",
    image: "/03.jpeg",
    title: "Карточка 3",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твердая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АЧ", correct: true },
        { label: "АН", correct: false },
        { label: "АЛ", correct: false },
      ],
    ],
  },

{
    id: "card-04",
    image: "/04.jpeg",
    title: "Карточка 4",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: true },
      ],
      [
        { label: "ЗА(ЗЕ)", correct: false },
        { label: "ПА(ПЕ)", correct: true },
        { label: "МА(МЕ)", correct: false },
      ],
    ],
  },

  {
    id: "card-05",
    image: "/05.jpeg",
    title: "Карточка 5",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твердая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "КЕ", correct: true },
        { label: "ЛЕ", correct: false },
        { label: "ТЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-06",
    image: "/06.jpeg",
    title: "Карточка 6",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твердая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ТЕ", correct: true },
        { label: "ЧЕ", correct: false },
        { label: "РЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-07",
    image: "/07.jpeg",
    title: "Карточка 7",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: true },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: true },
      ],
      [
        { label: "Ы-И", correct: true },
        { label: "А-Э", correct: false },
        { label: "О-У", correct: false },
      ],
    ],
  },

{
    id: "card-08",
    image: "/08.jpeg",
    title: "Карточка 8",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: true },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: true },
      ],
      [
        { label: "Ы-И", correct: false },
        { label: "А-Э", correct: true },
        { label: "О-У", correct: false },
      ],
    ],
  },

  {
    id: "card-09",
    image: "/09.jpeg",
    title: "Карточка 9",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: true },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ЙЕ", correct: true },
        { label: "Э", correct: false },
        { label: "Ө", correct: false },
      ],
    ],
  },

  {
    id: "card-10",
    image: "/10.jpeg",
    title: "Карточка 10",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: true },
        { label: "Твёрдый", correct: false },
        { label: "Парный", correct: false },
      ],
      [
        { label: "ӨКӨ", correct: true },
        { label: "ЭНГЕ", correct: false },
        // { label: "НЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-11",
    image: "/11.jpeg",
    title: "Карточка 11",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АГ", correct: true },
        { label: "АЛ", correct: false },
        { label: "АН", correct: false },
      ],
    ],
  },

  {
    id: "card-12",
    image: "/12.jpeg",
    title: "Карточка 12",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твердый", correct: true },
        { label: "Парный", correct: false },
      ],
      [
        { label: "ОРТЫ", correct: true },
        { label: "АНТА", correct: false },
        { label: "АЛТА", correct: false },
      ],
    ],
  },

  {
    id: "card-13",
    image: "/13.jpeg",
    title: "Карточка 13",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твердая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АЛ", correct: true },
        { label: "АК", correct: false },
        { label: "АТ", correct: false },
      ],
    ],
  },

{
    id: "card-14",
    image: "/14.jpeg",
    title: "Карточка 14",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твёрдый", correct: true },
        { label: "Парный", correct: false },
      ],
      [
        { label: "ОКУ", correct: true },
        { label: "АНТА", correct: false },
        { label: "ЫКЫ", correct: false },
      ],
    ],
  },

{
    id: "card-15",
    image: "/15.jpeg",
    title: "Карточка 15",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твёрдый", correct: true },
        { label: "Парный", correct: false },
      ],
      [
        { label: "АНЧА", correct: true },
        { label: "ЫКЫ", correct: false },
        { label: "АЛТА", correct: false },
      ],
    ],
  },

{
    id: "card-16",
    image: "/16.jpeg",
    title: "Карточка 16",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АР", correct: true },
        { label: "АЧ", correct: false },
        { label: "АК", correct: false },
      ],
    ],
  },

  {
    id: "card-17",
    image: "/17.jpeg",
    title: "Карточка 17",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: true },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "Ы", correct: false },
        { label: "А", correct: false },
        { label: "О(У)", correct: true },
      ],
    ],
  },

{
    id: "card-18",
    image: "/18.jpeg",
    title: "Карточка 18",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "СЕ", correct: true },
        { label: "ТЕ", correct: false },
        { label: "ЛЕ", correct: false },
      ],
    ],
  },

{
    id: "card-19",
    image: "/19.jpeg",
    title: "Карточка 19",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ДЕ", correct: true },
        { label: "КЕ", correct: false },
        { label: "ЛЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-20",
    image: "/20.jpeg",
    title: "Карточка 20",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твердый", correct: false },
        { label: "Парный", correct: true },
      ],
      [
        { label: "ЭНГЕ", correct: true },
        { label: "АНЧА", correct: false },
        { label: "АНТА", correct: false },
      ],
    ],
  },

{
    id: "card-21",
    image: "/21.jpeg",
    title: "Карточка 21",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твёрдый", correct: true },
        { label: "Парный", correct: false },
      ],
      [
        { label: "ОРТЫ", correct: false },
        { label: "НАЙ", correct: true },
        { label: "ОКУ", correct: false },
      ],
    ],
  },

{
    id: "card-22",
    image: "/22.jpeg",
    title: "Карточка 22",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: true },
      ],
      [
        { label: "ПА(ПЕ)", correct: false },
        { label: "ЗА(ЗЕ)", correct: true },
        { label: "МА(МЕ)", correct: false },
      ],
    ],
  },

  {
    id: "card-23",
    image: "/23.jpeg",
    title: "Карточка 23",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ГЕ", correct: true },
        { label: "ДЕ", correct: false },
        { label: "ЛЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-24",
    image: "/24.jpeg",
    title: "Карточка 24",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твердый", correct: true },
        { label: "Парный", correct: false },
      ],
      [
        { label: "АНТА", correct: true },
        { label: "АНЧА", correct: false },
        { label: "АЛТА", correct: false },
      ],
    ],
  },

{
    id: "card-25",
    image: "/25.jpeg",
    title: "Карточка 25",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкий", correct: false },
        { label: "Твёрдый", correct: true },
        { label: "Парный", correct: false },
      ],
      [
        { label: "АНТА", correct: false },
        { label: "АЛТА", correct: true },
        { label: "АНЧА", correct: false },
      ],
    ],
  },

  {
    id: "card-26",
    image: "/26.jpeg",
    title: "Карточка 26",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твердая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АЧ", correct: false },
        { label: "АР", correct: false },
        { label: "АС", correct: true },
      ],
    ],
  },

{
    id: "card-27",
    image: "/27.jpeg",
    title: "Карточка 27",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АШ", correct: true },
        { label: "АН", correct: false },
        { label: "АЗ", correct: false },
      ],
    ],
  },

{
    id: "card-28",
    image: "/28.jpeg",
    title: "Карточка 28",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "БЕ", correct: false },
        { label: "ЛЕ", correct: false },
        { label: "РЕ", correct: true },
      ],
    ],
  },

{
    id: "card-29",
    image: "/29.jpeg",
    title: "Карточка 29",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: true },
      ],
      [
        { label: "МА(ме)", correct: true },
        { label: "ПА(пе)", correct: false },
        { label: "ЗА(зе)", correct: false },
      ],
    ],
  },

  {
    id: "card-30",
    image: "/30.jpeg",
    title: "Карточка 30",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твердая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ЧЕ", correct: true },
        { label: "КЕ", correct: false },
        { label: "ТЕ", correct: false },
      ],
    ],
  },

  {
    id: "card-31",
    image: "/31.jpeg",
    title: "Карточка 31",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твердая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АТ", correct: false },
        { label: "АД", correct: true },
        { label: "АЛ", correct: false },
      ],
    ],
  },

  {
    id: "card-32",
    image: "/32.jpeg",
    title: "Карточка 32",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твердая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АН", correct: false },
        { label: "АТ", correct: false },
        { label: "АБ", correct: true },
      ],
    ],
  },

{
    id: "card-33",
    image: "/33.jpeg",
    title: "Карточка 33",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АТ", correct: false },
        { label: "АК", correct: true },
        { label: "АЛ", correct: false },
      ],
    ],
  },

  {
    id: "card-34",
    image: "/34.jpeg",
    title: "Карточка 34",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "АТ", correct: true },
        { label: "АЛ", correct: false },
        { label: "АН", correct: false },
      ],
    ],
  },

  {
    id: "card-35",
    image: "/35.jpeg",
    title: "Карточка 35",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "БЕ", correct: true },
        { label: "ДЕ", correct: false },
        { label: "ТЕ", correct: false },
      ],
    ],
  },

{
    id: "card-36",
    image: "/36.jpeg",
    title: "Карточка 36",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ЛЕ", correct: false },
        { label: "НЕ", correct: true },
        { label: "КЕ", correct: false },
      ],
    ],
  },

{
    id: "card-37",
    image: "/37.jpeg",
    title: "Карточка 37",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: true },
        { label: "Твёрдая", correct: false },
        { label: "Парная", correct: false },
      ],
      [
        { label: "НЕ", correct: false },
        { label: "ЛЕ", correct: true },
        { label: "КЕ", correct: false },
      ],
    ],
  },

{
    id: "card-38",
    image: "/38.jpeg",
    title: "Карточка 38",
    answersByQuestion: [
      [
        { label: "Согласная", correct: false },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: true },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдый", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ЫКЫ", correct: true },
        { label: "ЭНГЕ", correct: false },
        { label: "ОКУ", correct: false },
      ],
    ],
  },

  {
    id: "card-39",
    image: "/39.jpeg",
    title: "Карточка 39",
    answersByQuestion: [
      [
        { label: "Согласная", correct: true },
        { label: "Гласная", correct: false },
        { label: "Дифтонг", correct: false },
      ],
      [
        { label: "Мягкая", correct: false },
        { label: "Твёрдая", correct: true },
        { label: "Парная", correct: false },
      ],
      [
        { label: "ЖА(АЙ)", correct: true },
        { label: "АТ", correct: false },
        { label: "МА", correct: false },
      ],
    ],
  },

// {
//     id: "card-40",
//     image: "/40.jpeg",
//     title: "Карточка 40",
//     answersByQuestion: [
//       [
//         { label: "Согласная", correct: false },
//         { label: "Гласная", correct: false },
//         { label: "Разделительный знак", correct: true },
//       ],
//       [
//         { label: "Мягкий", correct: false },
//         { label: "Твёрдый", correct: true },
//         { label: "Парный", correct: false },
//       ],
//       [
//         { label: "ОРТЫ", correct: false },
//         { label: "НАЙ", correct: true },
//         { label: "ОКУ", correct: false },
//       ],
//     ],
//   },

];