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

			return data;
		} catch (err) {
			showAlert('Something went wrong while fetching contacts');
		}
	};
};

/* --------------------------------- ANCHOR Update Contact Status --------------------------------- */

/**
 * Update Contact
 * @param {string} id id of contact to update
 * @param {Contact['status']} status this status will be replaced with previous contact status
 * @return {*} Response data from api
 */
export const updateContactStatus = (id: string, status: Contact['status']) => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await axios.patch(`/contacts/update/${id}`, {
				status,
			});

			console.log(data);

			dispatch(contactsActions.updateContact(data.data));

			return data;
		} catch {
			alert('Something went wrong wile updating contact status');
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

			return data;
		} catch (err) {
			showAlert('Something went wrong while deleting contact');
		}
	};
};
