import { Forecast } from "@models/Forecast";
import Head from "next/head";
import CityForecastWrapper from "@wrappers/CityForecastWrapper";

export async function getServerSideProps({ params }) {
  const { city } = params;
  const cityForecast = new Forecast(city);
  const forecastResult = await cityForecast.getForecast();
  const {
    location: { name },
  } = forecastResult;
  const props = { title: `${name} forecast`, forecast: forecastResult };

  return { props };
}

const CityForecast = ({ title, forecast }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <CityForecastWrapper forecast={forecast} />
  </>
);

export default CityForecast;
