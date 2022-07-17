import React, { FC, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
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
	const [radioValue, setRadioValue] = useState<
		'Pending' | 'In Progress' | 'Completed'
	>('Pending');

	return (
		<Modal
			visible={props.visible}
			setVisible={props.setVisible}
			title='Chose status'
			//TODO: Update onOk to actual logic
			onOk={() => props.setVisible(false)}
		>
			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={() => setRadioValue('Pending')}
			>
				<RadioButton
					value='Pending'
					color={Colors.primary}
					status={radioValue === 'Pending' ? 'checked' : 'unchecked'}
				/>
				<Text style={styles.modalRadioButtonText}>Pending</Text>
			</Pressable>

			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={() => setRadioValue('In Progress')}
			>
				<RadioButton
					value='In Progress'
					color={Colors.primary}
					status={radioValue === 'In Progress' ? 'checked' : 'unchecked'}
				/>
				<Text style={styles.modalRadioButtonText}>In Progress</Text>
			</Pressable>

			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={() => setRadioValue('Completed')}
			>
				<RadioButton
					value='Completed'
					color={Colors.primary}
					status={radioValue === 'Completed' ? 'checked' : 'unchecked'}
				/>
				<Text style={styles.modalRadioButtonText}>Completed</Text>
			</Pressable>
		</Modal>
	);
};

export default UpdateContactModal;
