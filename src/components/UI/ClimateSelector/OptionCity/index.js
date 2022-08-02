const OptionCity = ({ onSelect, cityName }) => (
  <div className="border-2 border-t-0">
    <button
      type="button"
      onClick={() => {
        if (typeof onSelect === "function") onSelect(cityName);
      }}
      className="px-2 py-1"
    >
      {cityName}
    </button>
  </div>
);

export default OptionCity;
