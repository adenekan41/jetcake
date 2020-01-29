import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
// import { fetchCollectionsStart } from './shop/shop.saga'
import rootSaga from './root-saga';
// import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware();
const middlewears = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middlewears.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewears));

sagaMiddleware.run(rootSaga);

export default store;
