import { API_KEY, API_URL } from '@env';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import Colors from './constants/Colors';
import Contacts from './screens/contacts';
import store from './store';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['x-api-key'] = API_KEY;

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.primary,
	},
};

const App: FC = () => {
	const Drawer = createDrawerNavigator();

	return (
		<Provider store={store}>
			<StatusBar style='auto' />
			<NavigationContainer theme={theme}>
				<Drawer.Navigator initialRouteName='Contacts' backBehavior='history'>
					<Drawer.Screen name='Contacts' component={Contacts} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
