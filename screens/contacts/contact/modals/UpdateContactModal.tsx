import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Modal from '../../../../components/modal';
import Colors from '../../../../constants/Colors';
import styles from './modal.styles';

interface UpdateContactModalProps {
	/**
	 * If `true` modal will be visible
	 * @type {boolean}
	 */
	visible: boolean;
	/**
	 * function to update visible state
	 */
	setVisible: (setVisible: boolean) => any;
}

/**
 * Delete Contact  confirmation modal
 * @param {object} props
 * @param {boolean} props.visible if `true` props will be visible
 * @param {Function} props.setVisible function to update visible state
 * @return {JSX.Element} JSX.Element
 */
const UpdateContactModal: FC<UpdateContactModalProps> = props => {
	return (
		<Modal
			visible={props.visible}
			setVisible={props.setVisible}
			title='Chose status'
			//TODO: Update onOk to actual logic
			onOk={() => props.setVisible(false)}
		>
			<View style={styles.modalRadioButtonContainer}>
				<RadioButton value='Pending' color={Colors.primary} status='checked' />
				<Text style={styles.modalRadioButtonText}>Pending</Text>
			</View>

			<View style={styles.modalRadioButtonContainer}>
				<RadioButton
					value='In Progress'
					color={Colors.primary}
					status='checked'
				/>
				<Text style={styles.modalRadioButtonText}>In Progress</Text>
			</View>

			<View style={styles.modalRadioButtonContainer}>
				<RadioButton
					value='Completed'
					color={Colors.primary}
					status='checked'
				/>
				<Text style={styles.modalRadioButtonText}>Completed</Text>
			</View>
		</Modal>
	);
};

export default UpdateContactModal;
