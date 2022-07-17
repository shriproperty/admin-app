import { createSlice } from '@reduxjs/toolkit';
import { replaceContacts, deleteContact } from './contacts.actions';

const initialState: { value: Contact[] } = {
	value: [],
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		replaceContacts,
		deleteContact,
	},
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice;
