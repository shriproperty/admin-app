import { DrawerNavigationProp as DrawerNavigationPropType } from '@react-navigation/drawer';
import { StackNavigationProp as StackNavigationPropType } from '@react-navigation/stack';
import store from '../store';

export {};

declare global {
	type RootState = ReturnType<typeof store.getState>;
	type AppDispatch = typeof store.dispatch;
	type DrawerNavigationProp = DrawerNavigationPropType<DrawerParamList>;
	type StackNavigationProp = StackNavigationPropType<StackParamList>;

	type StackParamList = {
		Drawer: undefined;
		Contact: Contact;
		TempUser: TempUser;
	};

	type DrawerParamList = {
		Contacts: undefined;
		TempUsers: undefined;
	};

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
