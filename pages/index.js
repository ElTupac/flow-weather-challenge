import validIpAddress from "@utils/validators/validIpAddress";
import getDefaultLocations from "@utils/getters/getDefaultLocations";
import { Search } from "@models/Search";
import { Forecast } from "@models/Forecast";
import Head from "next/head";
import HomeWrapper from "@wrappers/HomeWrapper";

export async function getServerSideProps({ req }) {
  const props = {};

  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  if (validIpAddress(ip)) {
    const searchByIp = new Search(ip);
    const forecastByIp = new Forecast(ip);
    const [searchResults, forecastResult] = await Promise.all([
      searchByIp.getResults(),
      forecastByIp.getForecast(),
    ]);
    props.search = searchResults;
    props.forecast = forecastResult;
  } else
    props.search = {
      results: getDefaultLocations(),
    };

  return {
    props,
  };
}

const Home = (props) => (
  <>
    <Head>
      <title>Flow Weather</title>
    </Head>
    <HomeWrapper {...props} />
  </>
);

export default Home;
