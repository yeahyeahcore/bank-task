export function secondsToHMS(secondsValue: number) {
  const hours = Math.floor(secondsValue / 3600);
  const minutes = Math.floor(secondsValue / 60) % 60;
  const seconds = secondsValue % 60;

  return [hours, minutes, seconds]
    .map((value) => (value < 10 ? "0" + value : value))
    .filter((value, index) => value !== "00" || index > 0)
    .join(":");
}
