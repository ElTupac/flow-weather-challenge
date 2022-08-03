import Head from "next/head";
import CityForecastWrapper from "@wrappers/CityForecastWrapper";

export async function getServerSideProps({ params }) {
  const { city } = params;
  const props = { city, title: `${city} forecast` };

  return { props };
}

const CityForecast = ({ city, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <CityForecastWrapper city={city} />
  </>
);

export default CityForecast;
