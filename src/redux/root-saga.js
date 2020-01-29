import { call, all } from 'redux-saga/effects';
import { userSagas } from './user/sagas';

export default function* rootSaga() {
	yield all([call(userSagas)]);
}
