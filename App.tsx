import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import store from './store';
import Contacts from './screens/contacts';
import Colors from './constants/Colors';

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
