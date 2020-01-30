import { takeLatest, put, all, call } from 'redux-saga/effects';

import { UserActionTypes } from './types';

import {
	signInSuccess,
	signInFaliure,
	signOutSuccess,
	signOutFailure,
	signUpSuccess,
	signUpFailure,
} from './actions';

import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
	updateUserProfileDocument,
} from '../../firebase';
import history from '../../utils/history';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFaliure(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);

		yield getSnapshotFromUserAuth(user);
		yield history.push('/profile');
	} catch (error) {
		yield put(signInFaliure(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
		yield history.push('/profile');
		yield alert('Signin Successfully');
		yield history.go();
	} catch (error) {
		yield put(signInFaliure(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFaliure(error));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
		yield history.push('/');
		yield history.go();
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* signUp({
	payload: { email, password, displayName, dob, address, photo },
}) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(
			signUpSuccess({
				user,
				additionalData: { displayName, dob, address, photo },
			})
		);
		yield alert('Created New Account Successfully');
		history.push('/profile');
	} catch (error) {
		yield put(signUpFailure(error));
	}
}
export function* editProfile({
	payload: {
		id,
		email,
		photo,
		displayName,
		dob,
		address,
		security1,
		security2,
		security3,
	},
}) {
	try {
		const additionalData = {
			id,
			email,
			photo,
			displayName,
			dob,
			address,
			security1,
			security2,
			security3,
		};
		const userRef = yield call(updateUserProfileDocument, additionalData);
		yield userRef.get();
		yield isUserAuthenticated();
		yield alert('Edited Account Successfully');
	} catch (error) {
		yield put(signUpFailure(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
	yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onEditStart() {
	yield takeLatest(UserActionTypes.EDIT_START, editProfile);
}

export function* onSignUpSuccess() {
	yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart),
		call(onEditStart),
		call(onSignUpSuccess),
	]);
}
