import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index";
import sagas from "./sagas/todos";

const sagaMiddleware = createSagaMiddleware();

const composer =
  process.env.NODE_ENV === "production"
    ? [applyMiddleware(sagaMiddleware)]
    : [
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      ];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), ...composer)
);

sagaMiddleware.run(sagas);

export default store;
