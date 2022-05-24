import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Counter from "./Counter";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
