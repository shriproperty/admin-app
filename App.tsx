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
				<StackNavigation />
			</NavigationContainer>
		</Provider>
	);
};

const headerOptions = {
	headerTintColor: Colors.primary,
	headerShadowVisible: true,
};

const StackNavigation: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: 'slide_from_right',
				...headerOptions,
			}}
		>
			<Stack.Screen
				name='Drawer'
				component={DrawerNavigation}
				options={{ headerShown: false }}
			/>
			{/* <Stack.Screen name='Contact' component={Contact} /> */}
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

const DrawerNavigation: FC = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Contacts'
			backBehavior='history'
			screenOptions={{
				drawerActiveTintColor: Colors.primary,
				...headerOptions,
			}}
		>
			<Drawer.Screen name='Contacts' component={Contacts} />
			<Drawer.Screen
				name='TempUsers'
				options={{ title: 'Temporary Users' }}
				component={TempUsers}
			/>
		</Drawer.Navigator>
	);
};

export default App;
