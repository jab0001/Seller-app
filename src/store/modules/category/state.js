let searchParams = window.localStorage.getItem("searchParams");

export default {
  path: {
    main: null,
    id: null,
  },
  searchParams: searchParams ? JSON.parse(searchParams) : {},
  menu: {
    buildings: [
      {
        id: 1,
        title: "Квартиры",
        type: "floors",
      },
      {
        id: 2,
        title: "Комнаты",
        type: "rooms",
      },
      {
        id: 3,
        title: "Дома",
        type: "houses",
      },
      {
        id: 4,
        title: "Гаражи, парковочные места",
        type: "garages-parkings",
      },
      {
        id: 5,
        title: "Коммерческая недвижимость",
        type: "commercial",
      },
      {
        id: 6,
        title: "Земельные участки",
        type: "land-plot",
      },
    ],
    work: [
      {
        id: 1,
        title: "Вакансии",
        type: "searchWork",
      },
      {
        id: 2,
        title: "Резюме",
        type: "searchWorkers",
      },
    ],
    technic: [
      {
        id: 1,
        title: "Телефоны и планшеты",
        type: "phones-tablets",
      },
      {
        id: 2,
        title: "Компьютерная техника",
        type: "computers",
      },
      {
        id: 3,
        title: "Аудио, видео и тв",
        type: "audio-video-tv",
      },
      {
        id: 4,
        title: "Фототехника",
        type: "photo",
      },
      {
        id: 5,
        title: "Приставки и игры",
        type: "consoles",
      },
      {
        id: 6,
        title: "Оргтехника",
        type: "office",
      },
    ],
  },

  menuSecond: {
    floors: [
      {
        id: 1,
        title: "Продажа",
        type: "sell",
        filters: [
          {
            title: "Продажа",
            type: "sell",
          },
          {
            title: "Аренда",
            type: "rent",
          },
        ],
      },
      {
        id: 2,
        title: "Комнаты",
        type: "rooms",
        filters: [
          {
            title: "1 комната",
            type: "room1",
          },
          {
            title: "2 комнаты",
            type: "room2",
          },
          {
            title: "3 комнаты",
            type: "room3",
          },
          {
            title: "4 комнаты",
            type: "room4",
          },
          {
            title: "5 комнат и более",
            type: "room5",
          },
          {
            title: "Студия",
            type: "appartment",
          },
          {
            title: "Свободная планировка",
            type: "free-planing",
          },
        ],
      },
      {
        id: 3,
        title: "Вторичка/Новостройка",
        type: "in-use",
        filters: [
          {
            title: "Вторичка/Новостройка",
            checked: false,
          },
          {
            title: "Вторичка",
            checked: false,
          },
          {
            title: "Новостройка",
            checked: false,
          },
        ],
      },
    ],
  },
};
