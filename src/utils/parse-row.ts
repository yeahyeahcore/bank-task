import type { Row } from "../types/row.type";

function replaceSpaces(text: string): string {
  return text.replaceAll("_", " ");
}

export function parseRow(rows: string[]): Row[] {
  return rows.map((row) => {
    const [lectureTimeFrom, lectureTimeTo, fullname, subject] = row.split(" ");

    return {
      lectureTimeFrom,
      lectureTimeTo,
      fullname: replaceSpaces(fullname),
      subject: replaceSpaces(subject),
    };
  });
}
