import { StyleSheet, TextStyle } from 'react-native';
import Colors from '../../constants/Colors';

interface Styles {
	name: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	name: {
		color: Colors.primary,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
});

export default styles;
