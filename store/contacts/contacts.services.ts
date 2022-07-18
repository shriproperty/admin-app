import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { contactsActions } from './contacts.slice';
import showAlert from '../../helpers/alert';

/* --------------------------------- ANCHOR Fetch all contacts --------------------------------- */

/**
 * Fetch All contacts from api
 */
export const fetchAllContacts = () => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.get('/contacts/all');

			dispatch(contactsActions.replaceContacts(data.data));

			return data.data;
		} catch (err) {
			showAlert('Something went wrong while deleting contact');
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
			showAlert('Something went wrong while deleting contact');
		}
	};
};
