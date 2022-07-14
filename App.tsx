import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Contacts from './screens/contacts/Contacts.screen';

const App: FC = () => {
	const Drawer = createDrawerNavigator();

	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Drawer.Navigator initialRouteName='Contacts' backBehavior='history'>
					<Drawer.Screen name='Contacts' component={Contacts} />
				</Drawer.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
