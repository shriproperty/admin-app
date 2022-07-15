import { APIKEY, APIURL } from '@env';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Colors from './constants/Colors';
import TempUsers from './screens/tempUsers';
import Contacts from './screens/contacts';
import Contact from './screens/contacts/contact';

axios.defaults.baseURL = APIURL;
axios.defaults.headers.common['x-api-key'] = APIKEY;

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.primary,
	},
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App: FC = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar style='auto' />
				<DrawerNavigation />
			</NavigationContainer>
		</Provider>
	);
};

const DrawerNavigation: FC = () => {
	return (
		<Drawer.Navigator initialRouteName='Contacts' backBehavior='history'>
			<Drawer.Screen
				name='Contacts'
				options={{ headerShown: false }}
				component={ContactNavigation}
			/>
			<Drawer.Screen name='Temporary Users' component={TempUsers} />
		</Drawer.Navigator>
	);
};

const ContactNavigation: FC = () => {
	return (
		<Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
			<Stack.Screen name='All Contacts' component={Contacts} />
			<Stack.Screen name='Contact' component={Contact} />
		</Stack.Navigator>
	);
};

export default App;
