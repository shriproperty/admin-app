import store from '../store';

export {};

declare global {
	type RootState = ReturnType<typeof store.getState>;
	type AppDispatch = typeof store.dispatch;

	interface Contact {
		_id: string;
		name: string;
		subject: string;
		email: string;
		phone: string;
		message: string;
		status: 'Pending' | 'In Progress' | 'Completed';
	}

	interface TempUser {
		_id: string;
		name: string;
		email: string;
		phone: string;
		callingStatus: 'Pending' | 'Rejected' | 'Call Again' | 'Done';
		callAgainDate?: string;
		talkProgress?: string;
	}
}
