import type { Row } from "../types/row.type";

export function getLecturesByName(rows: Row[], name: string) {
  const lectures: string[] = [];

  rows.forEach(({ subject, fullname }) => {
    if (fullname.includes(name)) {
      lectures.push(subject);
    }
  });

  return lectures;
}
