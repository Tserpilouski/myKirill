export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    weekday: "long",
  };

  const formattedDate: string = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(date);
  return formattedDate;
}
