import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { fetchUserDataFail, fetchUserSuccess, updateUserFail, updateUserSuccess } from '../actionCreators/user';
import { FETCH_USER_PENDING, NAVIGATE_HOME, UPDATE_USER_PENDING } from '../actions';
import { ROUTES } from '../constants';
import { getUserData, updateUserData } from '../services/user';
import { history } from '../store';

const getUsersList = (state) => state.users.users;

function* getUser({ payload }) {
	const usersList = yield select(getUsersList);
	if (usersList !== null) {
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
	} else {
		yield call(navigateHome);
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

function userSaga() {
	return all([
		takeLatest(FETCH_USER_PENDING, getUser),
		takeLatest(UPDATE_USER_PENDING, updateUser),
		takeLatest(NAVIGATE_HOME, navigateHome),
	]);
}

export default userSaga;
