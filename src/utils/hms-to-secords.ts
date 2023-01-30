export function hmsToSeconds(hms: string): number {
  const [hours, minutes, seconds = "00"] = hms.split(":");

  return +hours * 60 * 60 + +minutes * 60 + +seconds;
}
