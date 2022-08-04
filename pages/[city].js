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
  const props = {
    title: `${name} forecast`,
    description: `Check the weather in ${name}, get the next days forecast`,
    forecast: forecastResult,
  };

  return { props };
}

const CityForecast = ({ title, description, forecast }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <CityForecastWrapper forecast={forecast} />
  </>
);

export default CityForecast;
