import { readFileLines } from "./utils/read-file-lines";
import { parseRow } from "./utils/parse-row";
import { getLecturesByName } from "./tasks/get-lectures-by-name";
import { getLecturesByTime } from "./tasks/get-lectures-by-time";
import { findMaxLectureTime } from "./tasks/find-max-lecture-time";

readFileLines("./data.txt", parseRow).then((rows) => {
  const lecturesByName = getLecturesByName(rows, "Иван Иванов");
  const lecturesByTime = getLecturesByTime(rows, 15);
  const [{ subject, fullname }, maxLectureTime] = findMaxLectureTime(rows);

  console.log("Лекции Ивана Иванова:", lecturesByName);
  console.log("Лекции, которые длятся больше 15 минут:", lecturesByTime);

  console.log(
    `Максимальная по времени продолжительности лекция: ${subject} - ${fullname} / ${maxLectureTime}`
  );
});
