import React from "react";
import { Provider } from "react-redux";
import "./assets/sass/index.scss";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux is fucking awesome</h1>
    </Provider>
  );
};

export default App;
