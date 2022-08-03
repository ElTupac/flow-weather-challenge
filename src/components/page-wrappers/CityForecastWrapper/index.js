import ClimateInfo from "@ui/ClimateInfo";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import CityHeader from "@ui/CityHeader";

const CityForecastWrapper = ({ forecast: { forecast, location } }) => (
  <>
    <Link href="/">
      <p className="flex items-center text-brand-lighten-50-gray">
        <ArrowNarrowLeftIcon className="w-5 h-5" />
        &nbsp;Go back
      </p>
    </Link>
    <div className="container mx-auto gap-5">
      <CityHeader cityInfo={location} />
      <ClimateInfo forecast={forecast} />
    </div>
  </>
);

export default CityForecastWrapper;
