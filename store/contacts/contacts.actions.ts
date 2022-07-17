import { PayloadAction } from '@reduxjs/toolkit';

interface State {
	value: Contact[];
}

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

/**
 * Delete contact
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
