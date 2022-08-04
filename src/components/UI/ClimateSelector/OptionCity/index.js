import Link from "next/link";

const OptionCity = ({ onSelect, cityData }) => (
  <div className="border-2 border-brand-accent-gray border-t-0">
    <Link href={`/${cityData.url}`}>
      <button
        type="button"
        onClick={() => {
          if (typeof onSelect === "function") onSelect(cityData);
        }}
        className="px-2 py-1 w-full text-left"
      >
        {`${cityData.name}${cityData.region ? `, ${cityData.region}` : ""}${
          cityData.country ? `, ${cityData.country}` : ""
        }`}
      </button>
    </Link>
  </div>
);

export default OptionCity;
