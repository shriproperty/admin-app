import { APIKEY, APIURL } from '@env';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, Portal } from 'react-native-paper';

import store from './store';
import Colors from './constants/Colors';
import StackNavigation from './navigation/StackNavigation';

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
	return (
		<Provider store={store}>
			<NavigationContainer theme={theme}>
				<StatusBar style='auto' />
				<PaperProvider>
					<Portal.Host>
						<StackNavigation />
					</Portal.Host>
				</PaperProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
