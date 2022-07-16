import React, { FC } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import { Button as ButtonFromPaper } from 'react-native-paper';
import Colors from '../../constants/Colors';
import styles from './index.styles';

interface ButtonProps {
	/**
	 * Title of button
	 * @type {string}
	 */
	title: string;
	/**
	 * Color of button
	 * @type {string}
	 */
	color?: string;
	/**
	 * type of button styling will be based on type
	 * @type {('contained' | 'text' | 'outlined')}
	 */
	type?: 'contained' | 'text' | 'outlined';
	/**
	 * If `true` than all characters will be
	 *  uppercase automatically `true` by default
	 * @type {boolean}
	 */
	uppercase?: boolean;
	/**
	 * If `true` ripple effect will be shown `true` by default
	 * @type {boolean}
	 */
	rippleEffect?: boolean;
	/**
	 * Additional styles for button
	 * @type {ViewStyle}
	 */
	style?: ViewStyle;
	/**
	 * Icon to show on button
	 * @type {string}
	 */
	icon?: string;
	/**
	 * Function to execute when button is clicked
	 * @type {Function}
	 */
	onPress?: any;
}

/**
 * Button Component
 * @param {*} props
 * @param {string} props.title title of button
 * @param {string} props.color color of button
 * @param {string} props.type type of button can be `contained` | `text` | `outlined`
 * @param {string} props.uppercase If `true` than all characters will be uppercase automatically `true` by default
 * @param {string} props.rippleEffect If `true` than ripple effect `true` by default
 * @param {string} props.icon icon to show on button
 * @param {object} props.style additional styles for button
 * @param {Function} props.onPress function to execute when button is clicked
 * @return {JSX.Element} JSX.Element
 */
const Button: FC<ButtonProps> = props => {
	return (
		<Pressable
			android_ripple={!props.rippleEffect ? null : { color: Colors.ripple }}
			onPress={props.onPress}
		>
			<ButtonFromPaper
				style={[styles.button, props.style]}
				mode={props.type ? props.type : 'outlined'}
				color={props.color ? props.color : Colors.primary}
				icon={props.icon}
				uppercase={props.uppercase}
			>
				{props.title}
			</ButtonFromPaper>
		</Pressable>
	);
};

export default Button;
