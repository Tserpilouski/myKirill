export function setFormatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };

  const formattedDate: string = new Intl.DateTimeFormat(
    "en-US",
    options
  ).format(date);
  return formattedDate;
}

export function setDaysOfWeek(currentDate: Date): string[] {
  const daysOfWeek = [];

  for (let day = 1; day < 7; day++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + day);
    daysOfWeek.push(setFormatDate(nextDay));
  }

  return daysOfWeek;
}
