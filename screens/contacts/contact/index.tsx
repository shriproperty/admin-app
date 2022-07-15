import React, { FC, useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

const Contact: FC = props => {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			title: 'Hello',
		});
	}, []);

	return <Text>Contact</Text>;
};

export default Contact;
