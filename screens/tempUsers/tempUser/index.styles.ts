import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Colors from '../../../constants/Colors';

interface TempUserStyles {
	flexRow: ViewStyle;
	marginTopBig: TextStyle | ViewStyle;
	marginTopSmall: TextStyle | ViewStyle;
	container: ViewStyle;
	name: TextStyle;
	talkProgress: TextStyle;
	colorAccent: TextStyle;
	infoContainer: ViewStyle;
	infoHeading: TextStyle;
	infoContent: TextStyle;
	pencilIcon: ViewStyle;
	buttonContainer: ViewStyle;
}

const styles = StyleSheet.create<TempUserStyles>({
	flexRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	colorAccent: {
		color: Colors.secondary,
	},

	marginTopBig: {
		marginTop: 25,
	},

	marginTopSmall: {
		marginTop: 15,
	},

	container: {
		padding: 25,
	},

	name: {
		color: Colors.primary,
		fontWeight: '500',
		fontSize: 25,
	},

	talkProgress: {
		color: Colors.grey,
		lineHeight: 30,
		letterSpacing: 1,
		fontSize: 20,
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
		color: Colors.primary,
	},

	pencilIcon: {
		marginLeft: 20,
	},

	buttonContainer: {
		marginVertical: 60,
	},
});

export default styles;
