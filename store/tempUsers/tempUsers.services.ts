import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { tempUsersActions } from './tempUsers.slice';

export const fetchAllTempUsers = () => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.get('/temp-users/all');

			dispatch(tempUsersActions.replaceTempUsers(data.data));

			return data.data;
		} catch (err) {
			console.error(err);
		}
	};
};
