import getPeriodOfDay from "@utils/getters/getPeriodOfDay";
import TimeAndDate from "./TimeAndDate";

const citiesBackground = {
  day: "bg-[url('/images/cities/city-day.jpg')]",
  night: "bg-[url('/images/cities/city-night.jpg')]",
};

const ClimateInfo = () => (
  <section
    className={`rounded-lg h-fit shadow-lg md:w-2/3 bg-center bg-cover bg-no-repeat ${
      citiesBackground[getPeriodOfDay(new Date())]
    }`}
  >
    <div className="rounded-lg m-5 p-5 bg-brand-lighten-100-gray/50">
      <TimeAndDate />
    </div>
  </section>
);

export default ClimateInfo;
