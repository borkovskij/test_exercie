import {
	CHANGE_PAGE,
	FETCH_USER_FAIL,
	FETCH_USER_PENDING,
	FETCH_USER_SUCCESS,
	UPDATE_USER_FAIL,
	UPDATE_USER_PENDING,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FIELD,
	CLEAR_USER_REDUCER,
} from '../actions';

export const fetchUserData = (userId) => ({
	type: FETCH_USER_PENDING,
	payload: { userId },
});

export const updateUserData = (userData) => ({
	type: UPDATE_USER_PENDING,
	payload: { userData },
});

export const fetchUserSuccess = (payload) => ({
	type: FETCH_USER_SUCCESS,
	payload,
});

export const fetchUserDataFail = () => ({
	type: FETCH_USER_FAIL,
});

export const updateUserSuccess = (payload) => ({
	type: UPDATE_USER_SUCCESS,
	payload,
});

export const updateUserFail = () => ({
	type: UPDATE_USER_FAIL,
});

export const changePage = (path) => ({
	type: CHANGE_PAGE,
	payload: { path },
});

export const updateUserField = (payload) => ({
	type: UPDATE_USER_FIELD,
	payload,
});

export const clearUserReducer = () => ({
	type: CLEAR_USER_REDUCER,
});
