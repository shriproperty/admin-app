import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import showAlert from '../../helpers/alert';
import { tempUsersActions } from './tempUsers.slice';

/* --------------------------------- ANCHOR Fetch all Temp users --------------------------------- */

/**
 * This service will fetch all tempUsers from api
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

/* --------------------------------- ANCHOR update tempUser calling status --------------------------------- */

/**
 * This service will make an api call and update temp user calling status
 * @param {string} id id of tempUser to update
 * @param {TempUser['callingStatus']} callingStatus this status will be replaced with previous calling status
 * @param {Date} callAgainDate set Date to remember when to make call to user. this is an optional parameter but required when `callingStatus` is `Call Again`
 * @param {string} talkProgress this is record of what we have talked with user. this is an optional parameter but required when `callingStatus` is `Call Again`
 * @return {*}
 */
export const updateTempUserCallingStatus = (
	id: string,
	callingStatus: TempUser['callingStatus'],
	callAgainDate?: Date,
	talkProgress?: string
) => {
	return async (dispatch: Dispatch) => {
		try {
			// if callingStatus is `Call Again` but there is no `talkProgress` or `callAgainDate`
			if (callingStatus === 'Call Again' && (!callAgainDate || !talkProgress)) {
				return showAlert(
					"'Talk Progress' and 'Call Again Date' are required when calling status is 'Call Again'"
				);
			}

			const { data } = await axios.patch(
				`/temp-users/update-calling-status/${id}`,
				{
					callingStatus,
					talkProgress,
					callAgainDate,
				}
			);

			dispatch(tempUsersActions.updateTempUser(data.data));

			return data;
		} catch (err) {
			showAlert('Something went wrong while updating calling status');
		}
	};
};

/* --------------------------------- ANCHOR Delete single Temp user --------------------------------- */

/**
 * This service will make an api call and delete single contact
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
