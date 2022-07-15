import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts.slice';
import tempUsersSlice from './tempUsers/tempUsers.slice';

const store = configureStore({
	reducer: {
		contacts: contactsSlice.reducer,
		tempUsers: tempUsersSlice.reducer,
	},
});

export default store;
