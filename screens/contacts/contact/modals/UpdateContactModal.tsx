import React, { FC, useState } from 'react';
import { Text, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { updateContactStatus } from '../../../../store/contacts/contacts.services';
import Modal from '../../../../components/modal';
import Colors from '../../../../constants/Colors';
import styles from './modal.styles';
import { useAppDispatch } from '../../../../hooks';
import { useNavigation } from '@react-navigation/native';

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
	/**
	 * Id of contact
	 * @type {string}
	 */
	id: string;
}

/**
 * Delete Contact  confirmation modal
 * @param {object} props
 * @param {boolean} props.visible if `true` props will be visible
 * @param {Function} props.setVisible function to update visible state
 * @param {Function} props.id Id of contact
 * @return {JSX.Element} JSX.Element
 */
const UpdateContactModal: FC<UpdateContactModalProps> = props => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<DrawerNavigationProp>();
	const [radioValue, setRadioValue] = useState<Contact['status']>('Pending');

	const updateRadioValue = (value: Contact['status']) => {
		setRadioValue(value);
	};

	/**
	 * Update contact status event
	 * @param {string} id id of contact to update
	 * @param {Contact['status']} status this status will be replaced with previous contact status
	 */
	const updateContactHandler = (id: string, status: Contact['status']) => {
		dispatch(updateContactStatus(id, status));
		props.setVisible(false);
	};

	return (
		<Modal
			visible={props.visible}
			setVisible={props.setVisible}
			title='Chose status'
			//TODO: Update onOk to actual logic
			onOk={updateContactHandler.bind(this, props.id, radioValue)}
		>
			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={updateRadioValue.bind(this, 'Pending')}
			>
				<RadioButton
					value='Pending'
					color={Colors.primary}
					status={radioValue === 'Pending' ? 'checked' : 'unchecked'}
					onPress={updateRadioValue.bind(this, 'Pending')}
				/>
				<Text style={styles.modalRadioButtonText}>Pending</Text>
			</Pressable>

			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={updateRadioValue.bind(this, 'In Progress')}
			>
				<RadioButton
					value='In Progress'
					color={Colors.primary}
					status={radioValue === 'In Progress' ? 'checked' : 'unchecked'}
					onPress={updateRadioValue.bind(this, 'In Progress')}
				/>
				<Text style={styles.modalRadioButtonText}>In Progress</Text>
			</Pressable>

			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={updateRadioValue.bind(this, 'Completed')}
			>
				<RadioButton
					value='Completed'
					color={Colors.primary}
					status={radioValue === 'Completed' ? 'checked' : 'unchecked'}
					onPress={updateRadioValue.bind(this, 'Completed')}
				/>
				<Text style={styles.modalRadioButtonText}>Completed</Text>
			</Pressable>
		</Modal>
	);
};

export default UpdateContactModal;
