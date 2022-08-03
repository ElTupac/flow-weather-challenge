const getPeriodOfDay = (date: Date | string): string => {
  const dateObject = typeof date === "string" ? new Date(date) : date;
  const time = +dateObject.toLocaleString("en-US", {
    hour: "numeric",
    hour12: false,
  });
  const isDay = time > 6 && time < 7;

  return isDay ? "day" : "night";
};

export default getPeriodOfDay;
