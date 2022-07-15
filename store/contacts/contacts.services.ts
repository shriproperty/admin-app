import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { contactsActions } from './contacts.slice';

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
