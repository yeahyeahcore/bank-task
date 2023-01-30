import { hmsToSeconds } from "../utils/hms-to-secords";
import { secondsToHMS } from "../utils/seconds-to-hms";
import { differenceBeetwenTimesInSeconds } from "../utils/difference-beetwen-times";

import type { Row } from "../types/row.type";

export function findMaxLectureTime(rows: Row[]): [Row, string] {
  const maxRow = rows.reduce<Row>((accamulator, row) => {
    const currentSecondsFrom = hmsToSeconds(row.lectureTimeFrom);
    const currentSecondsTo = hmsToSeconds(row.lectureTimeTo);
    const previousSecondsFrom = hmsToSeconds(accamulator.lectureTimeFrom);
    const previousSecondsTo = hmsToSeconds(accamulator.lectureTimeTo);

    const currentDifference = differenceBeetwenTimesInSeconds(
      currentSecondsFrom,
      currentSecondsTo
    );
    const previousDifference = differenceBeetwenTimesInSeconds(
      previousSecondsFrom,
      previousSecondsTo
    );

    if (currentDifference > previousDifference) {
      return row;
    }

    return accamulator;
  }, rows[0]);

  return [
    maxRow,
    secondsToHMS(
      differenceBeetwenTimesInSeconds(
        hmsToSeconds(maxRow.lectureTimeFrom),
        hmsToSeconds(maxRow.lectureTimeTo)
      )
    ),
  ];
}
