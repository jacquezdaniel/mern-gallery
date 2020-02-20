import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Gallery from "./pages/gallery";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

// Enable Redux devTools and create Redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Gallery} />
        <Route exact path="/gallery" component={Gallery} />
      </Router>
    </Provider>
  );
}

export default App;
