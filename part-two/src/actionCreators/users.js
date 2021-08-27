import { CLEAR_DATA, USERS_LIST_FAIL, USERS_LIST_PENDING, USERS_LIST_SUCCESS } from '../actions';

export const fetchUsers = (page) => ({
	type: USERS_LIST_PENDING,
	payload: { page },
});

export const fetchUserDataSuccess = (payload) => ({
	type: USERS_LIST_SUCCESS,
	payload,
});

export const fetchUsersDataFail = () => ({
	type: USERS_LIST_FAIL,
});

export const clearData = () => ({
	type: CLEAR_DATA,
});
