import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CHANGE_PAGE, FETCH_USER_PENDING, NAVIGATE_HOME, UPDATE_USER_PENDING } from '../actions';
import { getUserData, updateUserData } from '../services/user';
import { history } from '../store';
import { ROUTES } from '../constants';
import { fetchUserDataFail, fetchUserSuccess, updateUserFail, updateUserSuccess } from '../actionCreators/user';

function* getUser({ payload }) {
	const { userId } = payload;
	try {
		const data = yield call(getUserData, userId);
		yield put(
			fetchUserSuccess({
				user: data.data,
			})
		);
	} catch (e) {
		yield put(fetchUserDataFail());
	}
}

function* updateUser({ payload }) {
	const { userData } = payload;
	try {
		const data = yield call(updateUserData, userData);
		yield put(updateUserSuccess({ userData: data }));
		yield call(history.push, ROUTES.CONFIRMATION_ROUTE);
	} catch (e) {
		yield put(updateUserFail());
	}
}

function* navigateHome() {
	yield call(history.push, ROUTES.USERS_ROUTE);
}

function* changePage({ payload }) {
	const { path } = payload;
	yield call(history.push, path);
}

function userSaga() {
	return all([
		takeLatest(FETCH_USER_PENDING, getUser),
		takeLatest(UPDATE_USER_PENDING, updateUser),
		takeLatest(NAVIGATE_HOME, navigateHome),
		takeLatest(CHANGE_PAGE, changePage),
	]);
}

export default userSaga;
