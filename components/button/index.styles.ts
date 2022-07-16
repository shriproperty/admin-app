import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ButtonStyles {
	button: ViewStyle;
}

const styles = StyleSheet.create<ButtonStyles>({
	button: {
		padding: 3,
	},
});

export default styles;
