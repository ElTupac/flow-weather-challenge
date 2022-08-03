import { CloudDownloadIcon, CloudUploadIcon } from "@heroicons/react/outline";

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
      &emsp;
      <p>
        <CloudUploadIcon className="h-4 w-4 inline" />
        &nbsp;{`${maxtemp_c}`}&#8451;
      </p>
      &emsp;
      <p>
        <CloudDownloadIcon className="h-4 w-4 inline" />
        &nbsp;{`${mintemp_c}`}&#8451;
      </p>
    </div>
    <h2>
      Temperature
      <br />
      <span>
        {avgtemp_c}
        <span>&#8451;</span>
      </span>
    </h2>
  </div>
);

export default MainWeatherInfo;
