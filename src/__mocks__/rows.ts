import type { Row } from "../types/row.type";

export const ROWS_WITH_MAX_INVERT_TIME: Row[] = [
  {
    lectureTimeFrom: "23:00",
    lectureTimeTo: "05:00",
    fullname: "Кутузов Кирилл Олегович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "10:00",
    lectureTimeTo: "12:00",
    fullname: "Иванов Иван Иванович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "15:30",
    lectureTimeTo: "16:00",
    fullname: "Руслан Гелясов Дмитриевич",
    subject: "Golang разработка",
  },
];

export const ROWS_WITH_MAX_CLASSIC_TIME: Row[] = [
  {
    lectureTimeFrom: "23:00",
    lectureTimeTo: "02:00",
    fullname: "Кутузов Кирилл Олегович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "10:00",
    lectureTimeTo: "12:00",
    fullname: "Иванов Иван Иванович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "15:30",
    lectureTimeTo: "19:00",
    fullname: "Руслан Гелясов Дмитриевич",
    subject: "Golang разработка",
  },
];

export const ROWS_WITH_NULLABLE_TIME: Row[] = [
  {
    lectureTimeFrom: "23:00",
    lectureTimeTo: "01:00",
    fullname: "Кутузов Кирилл Олегович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "00:00",
    lectureTimeTo: "03:40",
    fullname: "Иванов Иван Иванович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "15:30",
    lectureTimeTo: "16:00",
    fullname: "Руслан Гелясов Дмитриевич",
    subject: "Golang разработка",
  },
];

export const ROWS_WITH_INCORRECT_MINUTES: Row[] = [
  {
    lectureTimeFrom: "23:00",
    lectureTimeTo: "01:00",
    fullname: "Кутузов Кирилл Олегович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "00:00",
    lectureTimeTo: "03:80",
    fullname: "Иванов Иван Иванович",
    subject: "Golang разработка",
  },
  {
    lectureTimeFrom: "15:30",
    lectureTimeTo: "16:00",
    fullname: "Руслан Гелясов Дмитриевич",
    subject: "Golang разработка",
  },
];
