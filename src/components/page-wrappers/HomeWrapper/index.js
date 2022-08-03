import ClimateSelector from "@ui/ClimateSelector";
import ClimateInfo from "@ui/ClimateInfo";

const HomeWrapper = () => (
  <div className="container mx-auto md:flex items-center md:gap-x-5">
    <ClimateSelector selectedDefault="Cordoba" />
    <ClimateInfo />
  </div>
);

export default HomeWrapper;
