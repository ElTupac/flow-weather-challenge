import getDateAndTime from "@utils/getters/getDateAndTime";

const WeatherLine = ({
  weather: {
    date,
    day: { condition, maxtemp_c, mintemp_c },
  },
}) => (
  <div className="flex items-center justify-between">
    <p>{getDateAndTime(date).date}</p>
    <div className="grow">
      <img
        src={
          condition.icon.includes("http:")
            ? condition.icon
            : `http:${condition.icon}`
        }
        alt={condition.text}
        className="h-8 w-8 ml-auto"
      />
    </div>
    <p className="w-1/2 text-right">
      <span>{maxtemp_c}</span>
      <span>{mintemp_c}</span>
    </p>
  </div>
);

export default WeatherLine;
