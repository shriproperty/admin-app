import { createSlice } from '@reduxjs/toolkit';
import {
	replaceTempUsers,
	updateTempUser,
	deleteTempUser,
} from './tempUsers.actions';

const initialState: { value: TempUser[] } = {
	value: [],
};

const tempUsersSlice = createSlice({
	name: 'tempUsers',
	initialState,
	reducers: {
		replaceTempUsers,
		updateTempUser,
		deleteTempUser,
	},
});

export const tempUsersActions = tempUsersSlice.actions;

export default tempUsersSlice;
