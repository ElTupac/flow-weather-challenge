import getDateAndTime from "@utils/getters/getDateAndTime";
import TemperatureTag from "@ui/TemperatureTag";
import { CloudDownloadIcon, CloudUploadIcon } from "@heroicons/react/outline";

const WeatherLine = ({
  weather: {
    date,
    day: { condition, maxtemp_c, mintemp_c },
  },
}) => (
  <div className="flex items-center justify-between border-t pt-1 pb-2">
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
      <CloudUploadIcon className="w-3 h-3 inline" />
      <TemperatureTag temperature={maxtemp_c} />
      &emsp;
      <CloudDownloadIcon className="w-3 h-3 inline" />
      <TemperatureTag temperature={mintemp_c} />
    </p>
  </div>
);

export default WeatherLine;
