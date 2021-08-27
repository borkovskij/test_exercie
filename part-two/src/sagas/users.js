import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserDataSuccess, fetchUsersDataFail } from '../actionCreators/users';
import { USERS_LIST_PENDING } from '../actions';
import { getUsersList } from '../services/users';

function* getUsers({ payload }) {
	const { page } = payload;

	try {
		const data = yield call(getUsersList, page);
		yield put(
			fetchUserDataSuccess({
				users: data.data,
				pagination: {
					page: data.page,
					totalPages: data.total_pages,
					perPage: data.per_page,
					total: data.total,
				},
			})
		);
	} catch (e) {
		yield put(fetchUsersDataFail());
	}
}

function usersSaga() {
	return all([ takeLatest(USERS_LIST_PENDING, getUsers) ]);
}

export default usersSaga;
