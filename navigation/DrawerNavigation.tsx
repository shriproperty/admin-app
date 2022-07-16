import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import contacts from '../screens/contacts';
import tempUsers from '../screens/tempUsers';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: FC = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Contacts'
			backBehavior='history'
			screenOptions={{
				drawerActiveTintColor: Colors.primary,
				headerTintColor: Colors.primary,
				headerShadowVisible: true,
			}}
		>
			<Drawer.Screen name='Contacts' component={contacts} />
			<Drawer.Screen
				name='TempUsers'
				options={{ title: 'Temporary Users' }}
				component={tempUsers}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerNavigation;
