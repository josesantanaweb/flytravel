import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createWrapper } from "next-redux-wrapper";
import { AnimatePresence } from "framer-motion";
import store from "../store/store";
import Navbar from "components/Navbar/Navbar";
import "../styles/styles.scss";
import "../../public/css/default.css"; // theme css file
import "../../public/css/card.css"; // card css
import theme from "theme";
import PageContext from "../components/PageContext";
import { ModalProvider } from "styled-react-modal";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

const App = ({ Component, pageProps }) => {
  const [actualPath, setPath] = React.useState("/");
  const [countryContext, setCountryContext] = React.useState({
    code: "",
    iso: "",
    find: false,
  });

  const [flightsContext, setFlightsContext] = React.useState(null);
  const [detailsContext, setDetailsContext] = React.useState(null);
  const [passengersContext, setPassengersContext] = React.useState(null);

  const getLocationUser = async () => {
    try {
      const {
        data: { country_calling_code, country_code_iso3 },
      } = await axios.get("https://ipapi.co/json");
      console.log(
        "country_calling_code, country_code_iso3",
        country_calling_code,
        country_code_iso3
      );
      setCountryContext({
        code: country_calling_code,
        iso: country_code_iso3,
        find: true,
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  React.useEffect(() => {
    if (!countryContext.find) {
      getLocationUser();
    }
  }, []);

  return (
    <Provider store={store()}>
      <PersistGate persistor={store().__PERSISTOR} loading={null}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <AnimatePresence exitBeforeEnter>
              <PageContext.Provider
                value={{
                  actualPath: actualPath,
                  setPath: setPath,
                  countryContext: countryContext,
                  setCountryContext: setCountryContext,
                  flightsContext: flightsContext,
                  setFlightsContext: setFlightsContext,
                  detailsContext: detailsContext,
                  setDetailsContext: setDetailsContext,
                  passengersContext: passengersContext,
                  setPassengersContext: setPassengersContext,
                }}
              >
                <Head key={0}>
                  <title>Fly Travel</title>
                </Head>
                <Navbar key={1} actualPath={actualPath} />
                <Component key={2} {...pageProps} />
              </PageContext.Provider>
            </AnimatePresence>
          </ModalProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

const wrapper = createWrapper(store);

export default wrapper.withRedux(App);
