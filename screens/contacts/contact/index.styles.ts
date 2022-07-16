import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

interface ContactStyles {
	flexRow: ViewStyle;
	marginTop: TextStyle | ViewStyle;
	container: ViewStyle;
	subject: TextStyle;
	message: TextStyle;
	infoContainer: ViewStyle;
	infoHeading: TextStyle;
	infoContent: TextStyle;
	pencilIcon: ViewStyle;
	buttonContainer: ViewStyle;
	button: ViewStyle;
}

const styles = StyleSheet.create<ContactStyles>({
	flexRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	marginTop: {
		marginTop: 25,
	},

	container: {
		padding: 25,
	},

	subject: {
		color: Colors.primary,
		fontWeight: '500',
		fontSize: 25,
	},

	message: {
		color: Colors.grey,
		lineHeight: 25,
		letterSpacing: 1,
	},

	infoContainer: {
		flexDirection: 'row',
		marginBottom: 15,
		alignItems: 'center',
	},

	infoHeading: {
		fontSize: 20,
	},

	infoContent: {
		fontSize: 20,
		fontWeight: '500',
		marginLeft: 15,
		color: Colors.secondary,
	},

	pencilIcon: {
		marginLeft: 20,
	},

	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginVertical: 60,
	},

	button: {
		padding: 3,
	},
});

export default styles;
