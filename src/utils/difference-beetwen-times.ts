export function differenceBeetwenTimesInMinutes(from: number, to: number) {
  return differenceBeetwenTimesInSeconds(from, to) / 60;
}

export function differenceBeetwenTimesInSeconds(from: number, to: number) {
  if (from > to) {
    return 24 * 60 * 60 + to - from;
  }

  return to - from;
}
