import { createStore, applyMiddleware } from "redux";
import rootReducer from "store";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
