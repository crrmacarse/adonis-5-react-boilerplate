import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import rootSagas from 'sagas';

const sagasMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

const middleware: any[] = [sagasMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
  /* eslint-disable-next-line no-underscore-dangle */
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagasMiddleware.run(rootSagas);

export default store;
