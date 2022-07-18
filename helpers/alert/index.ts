import { Alert } from 'react-native';

/**
 * Show alert
 * @param {string} description description of alert
 * @return {*} Alert
 */
const showAlert = (description: string) => {
	return Alert.alert(
		'Something Went Wrong',
		description,
		[{ text: 'Oh noo', style: 'cancel' }],
		{ cancelable: true }
	);
};

export default showAlert;
