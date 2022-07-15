import { StyleSheet, TextStyle } from 'react-native';
import Colors from '../constants/Colors';

interface TableStyles {
	main: TextStyle;
}

const tableStyles = StyleSheet.create<TableStyles>({
	main: {
		color: Colors.primary,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
});

export default tableStyles;
