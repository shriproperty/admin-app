import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { replaceContacts } from './contacts.actions';

const initialState: { value: Contact[] } = {
	value: [],
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		replaceContacts,
	},
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice;
