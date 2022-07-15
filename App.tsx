import { APIKEY, APIURL } from '@env';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Colors from './constants/Colors';
import TempUsers from './screens/tempUsers';
import Contacts from './screens/contacts';

axios.defaults.baseURL = APIURL;
axios.defaults.headers.common['x-api-key'] = APIKEY;

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
					<Drawer.Screen name='Temporary Users' component={TempUsers} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
