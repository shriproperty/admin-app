import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from './screens/contacts/Contacts.screen';
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
		<>
			<StatusBar style='auto' />
			<NavigationContainer theme={theme}>
				<Drawer.Navigator initialRouteName='Contacts' backBehavior='history'>
					<Drawer.Screen name='Contacts' component={Contacts} />
				</Drawer.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
