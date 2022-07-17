import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { contactsActions } from './contacts.slice';

/* --------------------------------- ANCHOR Fetch all contacts --------------------------------- */

export const fetchAllContacts = () => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.get('/contacts/all');

			dispatch(contactsActions.replaceContacts(data.data));

			return data.data;
		} catch (err) {
			console.error(err);
		}
	};
};

/* --------------------------------- ANCHOR Delete single contact --------------------------------- */

/**
 * Delete single contact
 * @param {string} id id of contact to delete
 * @return {object} response data from api
 */
export const deleteContact = (id: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.delete(`/contacts/delete/${id}`);

			dispatch(contactsActions.deleteContact(id));

			return data.data;
		} catch (err) {
			//TODO: Show notification error instead of just logging
			console.error(err);
		}
	};
};
