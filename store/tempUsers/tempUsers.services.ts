import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import showAlert from '../../helpers/alert';
import { tempUsersActions } from './tempUsers.slice';

/* --------------------------------- ANCHOR Fetch all Temp users --------------------------------- */

/**
 * Fetch all temp users
 */
export const fetchAllTempUsers = () => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.get('/temp-users/all');

			dispatch(tempUsersActions.replaceTempUsers(data.data));

			return data.data;
		} catch (err) {
			showAlert('Something went wrong while fetching temp users');
		}
	};
};

/* --------------------------------- ANCHOR Delete single Temp user --------------------------------- */

/**
 * Delete single contact
 * @param {string} id id of tempUser to delete
 * @return {object} response data from api
 */
export const deleteTempUser = (id: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.delete(`/temp-users/delete/${id}`);

			dispatch(tempUsersActions.deleteTempUser(id));

			return data;
		} catch (err) {
			showAlert('Something went wrong while deleting temp user');
		}
	};
};
