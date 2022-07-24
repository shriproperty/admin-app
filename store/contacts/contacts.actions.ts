import { PayloadAction } from '@reduxjs/toolkit';

interface State {
	value: Contact[];
}

/* --------------------------------- ANCHOR Replace Contacts --------------------------------- */

/**
 * Replace all contacts with passed array
 * @param {PayloadAction<Contact[]>} action array of contacts by which state should be replaced
 */
export const replaceContacts = (
	state: State,
	action: PayloadAction<Contact[]>
) => {
	state.value = action.payload;
};

/* --------------------------------- ANCHOR Update Contact Status --------------------------------- */

/**
 * this will update contact from state with new contact passed as payload
 * @param {PayloadAction<Contact>} action Contact object
 */
export const updateContact = (state: State, action: PayloadAction<Contact>) => {
	// this will give index of contact object in state array
	const contactIndexInState = state.value.findIndex(
		contact => contact._id === action.payload._id
	);

	// this will replace found contact from state with new contact passed as payload
	state.value[contactIndexInState] = action.payload;
};

/* --------------------------------- ANCHOR Delete Contact --------------------------------- */

/**
 * This will delete contact from state
 * @param {PayloadAction<Contact['_id']>} action id of contact to delete from redux state
 */
export const deleteContact = (
	state: State,
	action: PayloadAction<Contact['_id']>
) => {
	const filteredState = state.value.filter(
		contact => contact._id !== action.payload
	);

	state.value = filteredState;
};
