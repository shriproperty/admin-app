import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ModalStyles {
	modalRadioButtonContainer: ViewStyle;
	modalRadioButtonText: TextStyle;
}

const styles = StyleSheet.create<ModalStyles>({
	modalRadioButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	modalRadioButtonText: {
		marginLeft: 10,
		fontSize: 16,
	},
});

export default styles;
