import { StyleSheet, ViewStyle } from 'react-native';

interface ModalStyles {
	modalContainer: ViewStyle;
}

const styles = StyleSheet.create<ModalStyles>({
	modalContainer: {
		borderRadius: 10,
	},
});

export default styles;
