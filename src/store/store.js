import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const { persistReducer } = require("redux-persist");
const storage = require("redux-persist/lib/storage").default;

export default () => {
  let store;
  const isClient = typeof window !== "undefined";

  const persistConfig = {
    key: "FlyTravelGoo",
    storage,
  };

  const composeEnhancers = composeWithDevTools({
    name: "FlyTravelGooDev",
    latency: 0,
  });

  const isDev = process.env.NEXT_PUBLIC_ENV !== "PRODUCTION";
  store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(applyMiddleware(thunk))
  );
  if (isClient) {
    // store = createStore(persistReducer(persistConfig, rootReducer), composeEnhancers(applyMiddleware(thunk)));
    store.__PERSISTOR = persistStore(store);
  } else {
    // store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(thunk));
  }

  return store;
};
