import { UserActionTypes } from './userTypes';

const { SET_CURRENT_USER } = UserActionTypes;

const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user
});

export default setCurrentUser;
