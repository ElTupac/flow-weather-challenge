import getDateAndTime from "@utils/getters/getDateAndTime";

const CityHeader = ({ cityInfo: { name, region, country, localtime } }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-fit">
      <h1>{name}</h1>
      <p>
        {region}
        {!region ? country : `, ${country}`}
      </p>
      <span>{getDateAndTime(localtime).hour}</span>
    </div>
  </div>
);

export default CityHeader;
