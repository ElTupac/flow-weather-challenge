const changeDateTimezone = (date: Date | string, timeZone: string): Date => {
  if (typeof date === "string")
    return new Date(
      new Date(date).toLocaleString("en-US", {
        timeZone,
      })
    );
  return new Date(date.toLocaleString("en-US", { timeZone }));
};

export default changeDateTimezone;
