import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../constants/Colors';
import DrawerNavigation from './DrawerNavigation';
import Contact from '../screens/contacts/contact';

const Stack = createNativeStackNavigator();

const StackNavigation: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'slide_from_right',
				headerTintColor: Colors.primary,
				headerShadowVisible: true,
			}}
			initialRouteName='Drawer'
		>
			<Stack.Screen
				name='Drawer'
				component={DrawerNavigation}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name='Contact'
				component={Contact}
				options={({ route }: any) => ({
					title: `Contacts / ${route?.params?.name}`,
				})}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigation;
