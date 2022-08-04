import ClimateInfo from "@ui/ClimateInfo";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import CityHeader from "@ui/CityHeader";
import ClimateSelector from "@ui/ClimateSelector";

const CityForecastWrapper = ({ forecast: { forecast, location } }) => (
  <>
    <div className="w-fit absolute py-1 px-2 rounded bg-white/75">
      <Link href="/">
        <p className="flex items-center text-brand-accent-main">
          <ArrowNarrowLeftIcon className="w-5 h-5" />
          &nbsp;Go back
        </p>
      </Link>
    </div>
    <div className="container mx-auto flex flex-col gap-4 text-white">
      <CityHeader cityInfo={location} />
      <ClimateInfo forecast={forecast} />
      <div className="flex justify-center">
        <ClimateSelector />
      </div>
    </div>
  </>
);

export default CityForecastWrapper;
