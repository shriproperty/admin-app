import React, { FC, ReactNode } from 'react';
import { Portal, Dialog } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Button from '../button';
import styles from './index.styles';

interface ModalProps {
	/**
	 * Visible state if `true` modal will be shown
	 * @type {boolean}
	 */
	visible: boolean;
	/**
	 * Function to change visible state
	 */
	setVisible: (setVisible: boolean) => any;
	/**
	 * Title to show on modal
	 * @type {string}
	 */
	title: string;
	/**
	 * Function to execute when pressed on Ok
	 * @type {*}
	 */
	onOk: any;
	/**
	 * Elements to show as content of modal
	 * @type {ReactNode}
	 */
	children: ReactNode;
}

/**
 * Modal window component
 * @param {object} props
 * @param {boolean} props.visible visible state of modal if `true` modal will be shown
 * @param {Function} props.setVisible setVisible function to update state
 * @param {string} props.title title of modal
 * @param {*} props.onOk function to execute when pressed on Ok
 * @return {JSX.Element} JSX Element
 */
const Modal: FC<ModalProps> = props => {
	return (
		<Portal>
			<Dialog
				style={styles.modalContainer}
				visible={props.visible}
				onDismiss={() => props.setVisible(false)}
			>
				<Dialog.Title>{props.title}</Dialog.Title>
				<Dialog.Content>{props.children}</Dialog.Content>
				<Dialog.Actions>
					<Button
						title='Cancel'
						type='text'
						uppercase={false}
						color={Colors.secondary}
						onPress={() => props.setVisible(false)}
					/>

					<Button title='Ok' type='text' onPress={props.onOk} />
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
};

export default Modal;
