import { differenceBeetwenTimesInMinutes } from "../utils/difference-beetwen-times";
import { hmsToSeconds } from "../utils/hms-to-secords";

import type { Row } from "../types/row.type";

export function getLecturesByTime(rows: Row[], minutes: number) {
  const lectures: string[] = [];

  rows.forEach(({ subject, lectureTimeFrom, lectureTimeTo, fullname }) => {
    const difference = differenceBeetwenTimesInMinutes(
      hmsToSeconds(lectureTimeFrom),
      hmsToSeconds(lectureTimeTo)
    );

    if (difference > minutes) {
      lectures.push(`${subject} - ${fullname}`);
    }
  });

  return lectures;
}
