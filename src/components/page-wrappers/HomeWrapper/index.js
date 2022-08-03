import ClimateSelector from "@ui/ClimateSelector";
import ClimateInfo from "@ui/ClimateInfo";

const HomeWrapper = ({ search: { results } }) => (
  <div className="container mx-auto md:flex items-center md:gap-x-5">
    <ClimateSelector defaultOptions={results} />
    <ClimateInfo />
  </div>
);

export default HomeWrapper;
