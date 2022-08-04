import getDateAndTime from "@utils/getters/getDateAndTime";

const CityHeader = ({ cityInfo: { name, region, country, localtime } }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-fit max-w-[50%]">
      <h1 className="text-xl">{name}</h1>
      <p className="text-sm leading-none">
        {region}
        {!region ? country : `, ${country}`}
      </p>
      <span className="text-sm leading-none">
        {getDateAndTime(localtime).hour}
      </span>
    </div>
  </div>
);

export default CityHeader;
