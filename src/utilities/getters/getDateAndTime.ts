const getDateAndTime = (
  date: Date | string
): { hour: string; date: string; year: string | number } => {
  const dateObject = typeof date === "string" ? new Date(date) : date;
  const dateString = dateObject.toLocaleString("en-US", {
    weekday: "long",
    month: "2-digit",
    day: "2-digit",
  });
  const timeString = dateObject.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateAndTimeInfo = {
    hour: timeString.toLowerCase(),
    date: dateString,
    year: dateObject.getFullYear(),
  };

  return dateAndTimeInfo;
};

export default getDateAndTime;
