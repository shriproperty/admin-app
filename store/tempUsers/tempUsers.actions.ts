import { PayloadAction } from '@reduxjs/toolkit';

interface State {
	value: TempUser[];
}

/* ------------------------ ANCHOR replace temp users ----------------------- */

/**
 * Replace all contacts with passed array
 * @param {PayloadAction<TempUser[]>} action array of temp users by which state should be replaced
 */
export const replaceTempUsers = (
	state: State,
	action: PayloadAction<TempUser[]>
) => {
	state.value = action.payload;
};

/* --------------------------------- ANCHOR update temp user calling status --------------------------------- */
/**
 * this will update temp user from state with new temp user passed as payload
 * @param {PayloadAction<TempUser>} action Temp user object
 */
export const updateTempUser = (
	state: State,
	action: PayloadAction<TempUser>
) => {
	// this will give index of tempUser object in state array
	const tempUserIndexInState = state.value.findIndex(
		tempUser => tempUser._id === action.payload._id
	);

	// this will replace found tempUser from state with new tempUser passed as payload
	state.value[tempUserIndexInState] = action.payload;
};

/* ------------------------ ANCHOR delete temp user ----------------------- */

/**
 * Delete Temp User
 * @param {PayloadAction<TempUser['_id']} action id of temp user to delete from redux state
 */
export const deleteTempUser = (
	state: State,
	action: PayloadAction<TempUser['_id']>
) => {
	const filteredState = state.value.filter(
		tempUser => tempUser._id !== action.payload
	);

	state.value = filteredState;
};
