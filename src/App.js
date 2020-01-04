import React from "react";
import { Provider } from "react-redux";
import "./assets/sass/index.scss";
import store from "./store";
import Main from "./pages/Main";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
