import { PayloadAction } from '@reduxjs/toolkit';

export const replaceContacts = (
	state: any,
	action: PayloadAction<Contact[]>
) => {
	state.value = action.payload;
};
