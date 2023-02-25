export default {
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
};
