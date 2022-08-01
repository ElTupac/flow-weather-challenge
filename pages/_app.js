import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("hola");
  return <Component {...pageProps} />;
}

export default MyApp;
