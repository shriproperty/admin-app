import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text } from 'react-native';

type ContactScreenProps = NativeStackScreenProps<StackParamList, 'Contact'>;

interface ContactProps {
	navigation: ContactScreenProps['navigation'];
	route: ContactScreenProps['route'];
}

const Contact: FC<ContactProps> = () => {
	return <Text>Contact</Text>;
};

export default Contact;
