/**
 * @format
 */
import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { name as appName } from "./app.json";
import QueryProvider from "./src/queryClient";
import { persistor, store } from "./src/redux";

class AppView extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryProvider>
            <App />
          </QueryProvider>
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppView);
