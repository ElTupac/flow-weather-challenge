import * as Layouts from "@layouts/index";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const availableLayouts = Object.keys(Layouts);
  const Layout =
    Component.layout && availableLayouts.includes(Component.layout)
      ? Layouts[Component.layout]
      : Layouts.DefaultLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
