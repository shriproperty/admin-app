import { PayloadAction } from '@reduxjs/toolkit';

export const replaceTempUsers = (state: any, action: PayloadAction) => {
	state.value = action.payload;
};
