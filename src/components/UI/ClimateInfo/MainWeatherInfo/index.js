import { CloudDownloadIcon, CloudUploadIcon } from "@heroicons/react/outline";
import TemperatureTag from "@ui/TemperatureTag";

const MainWeatherInfo = ({
  weatherInfo: {
    day: { condition, maxtemp_c, mintemp_c, avgtemp_c },
  },
}) => (
  <div>
    <div className="flex items-center">
      <img
        src={
          condition.icon.includes("http:")
            ? condition.icon
            : `http:${condition.icon}`
        }
        alt={condition.text}
        className="h-8 w-8"
      />
      &nbsp;
      <h3>{condition.text}</h3>
    </div>
    <div className="flex items-center">
      <p>
        <CloudUploadIcon className="h-4 w-4 inline" />
        &nbsp;
        <TemperatureTag temperature={maxtemp_c} />
      </p>
      &emsp;
      <p>
        <CloudDownloadIcon className="h-4 w-4 inline" />
        &nbsp;
        <TemperatureTag temperature={mintemp_c} />
      </p>
    </div>
    <h2 className="text-sm my-3">
      Temperature
      <br />
      <TemperatureTag className="text-6xl" temperature={avgtemp_c} />
    </h2>
  </div>
);

export default MainWeatherInfo;
