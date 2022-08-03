import Clock from "@ui/Clock";
import ClimateSelector from "@ui/ClimateSelector";

const HomeWrapper = ({ search: { results } }) => (
  <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-5">
    <Clock />
    <ClimateSelector defaultOptions={results} />
  </div>
);

export default HomeWrapper;
