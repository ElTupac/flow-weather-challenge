import { useState, useEffect } from "react";
import changeDateTimezone from "@utils/parsers/changeDateTimezone";
import getDateAndTime from "@utils/getters/getDateAndTime";
import adjustedInterval from "@utils/helpers/adjustedInterval";

const getDateInfo = (timeZone) => {
  const actualDate = timeZone
    ? changeDateTimezone(new Date(), timeZone)
    : new Date();
  return getDateAndTime(actualDate);
};

const TimeAndDate = ({ timeZone }) => {
  const [dateInfo, setDateInfo] = useState(getDateInfo(timeZone));

  useEffect(() => {
    const interval = adjustedInterval(() => {
      const newDateAndTimeInfo = getDateInfo(timeZone);
      setDateInfo(newDateAndTimeInfo);
    }, 60000);

    return () => interval.stop();
  }, [timeZone]);

  return (
    <div>
      <h3>{dateInfo.hour}</h3>
      <h4>{dateInfo.date}</h4>
      <p>{dateInfo.year}</p>
    </div>
  );
};

export default TimeAndDate;
