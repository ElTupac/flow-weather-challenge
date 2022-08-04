import getPeriodOfDay from "@utils/getters/getPeriodOfDay";
import TimeAndDate from "./TimeAndDate";

const citiesBackground = {
  day: "bg-[url('/images/cities/city-day.jpg')]",
  night: "bg-[url('/images/cities/city-night.jpg')]",
};

const Clock = () => (
  <section
    className={`rounded-lg h-fit p-2 shadow-lg xl:w-1/3 md:w-1/2 bg-center bg-cover bg-no-repeat ${
      citiesBackground[getPeriodOfDay(new Date())]
    }`}
  >
    <div className="rounded-lg m-5 p-5 bg-brand-lighten-100-gray/50">
      <TimeAndDate />
    </div>
  </section>
);

export default Clock;
