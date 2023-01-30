import fs from "fs";
import readLine from "readline";

export function readFileLines<T = unknown>(
  url: string,
  parse: (lines: string[]) => T[]
) {
  return new Promise<T[]>((resolve, reject) => {
    const fileLines: string[] = [];
    const fileStream = fs.createReadStream(url);
    const readLineInterface = readLine.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    readLineInterface.on("line", (line) => fileLines.push(line));
    readLineInterface.on("error", reject);
    readLineInterface.on("close", () => resolve(parse(fileLines)));
  });
}
