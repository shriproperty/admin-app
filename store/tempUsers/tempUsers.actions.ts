import { PayloadAction } from '@reduxjs/toolkit';

interface State {
	value: TempUser[];
}

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
