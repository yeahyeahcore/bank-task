import { findMaxLectureTime } from "../../tasks/find-max-lecture-time";

import {
  ROWS_WITH_MAX_CLASSIC_TIME,
  ROWS_WITH_MAX_INVERT_TIME,
  ROWS_WITH_NULLABLE_TIME,
  ROWS_WITH_INCORRECT_MINUTES,
} from "../../__mocks__/rows";

describe("Tasks tests", () => {
  it("test findMaxLectureTime with classic maximum time", () => {
    expect(findMaxLectureTime(ROWS_WITH_MAX_CLASSIC_TIME)).toEqual([
      {
        lectureTimeFrom: "15:30",
        lectureTimeTo: "19:00",
        fullname: "Руслан Гелясов Дмитриевич",
        subject: "Golang разработка",
      },
      "03:30:00",
    ]);
  });

  it("test findMaxLectureTime with classic invert time", () => {
    expect(findMaxLectureTime(ROWS_WITH_MAX_INVERT_TIME)).toEqual([
      {
        lectureTimeFrom: "23:00",
        lectureTimeTo: "05:00",
        fullname: "Кутузов Кирилл Олегович",
        subject: "Golang разработка",
      },
      "06:00:00",
    ]);
  });

  it("test findMaxLectureTime with nullable time", () => {
    expect(findMaxLectureTime(ROWS_WITH_NULLABLE_TIME)).toEqual([
      {
        lectureTimeFrom: "00:00",
        lectureTimeTo: "03:40",
        fullname: "Иванов Иван Иванович",
        subject: "Golang разработка",
      },
      "03:40:00",
    ]);
  });

  it("test findMaxLectureTime with incorrect minutes", () => {
    expect(findMaxLectureTime(ROWS_WITH_INCORRECT_MINUTES)).toEqual([
      {
        lectureTimeFrom: "00:00",
        lectureTimeTo: "03:80",
        fullname: "Иванов Иван Иванович",
        subject: "Golang разработка",
      },
      "04:20:00",
    ]);
  });
});
