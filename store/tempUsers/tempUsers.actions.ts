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
