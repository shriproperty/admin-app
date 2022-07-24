import React, { FC, useState } from 'react';
import { Text, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Modal from '../../../../components/modal';
import Colors from '../../../../constants/Colors';
import styles from './modal.styles';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { useNavigation } from '@react-navigation/native';
import { updateTempUserCallingStatus } from '../../../../store/tempUsers/tempUsers.services';

interface UpdateTempUserCallingStatusModalProps {
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
	 * Id of Temp user
	 * @type {string}
	 */
	id: string;
}

const UpdateTempUserCallingStatusModal: FC<
	UpdateTempUserCallingStatusModalProps
> = props => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<DrawerNavigationProp>();
	const [radioValue, setRadioValue] =
		useState<TempUser['callingStatus']>('Pending');

	const updateRadioValue = (value: TempUser['callingStatus']) => {
		setRadioValue(value);
	};

	const updateTempUserCallingStatusHandler = () => {
		dispatch(updateTempUserCallingStatus(props.id, radioValue));
		props.setVisible(false);
	};

	return (
		<Modal
			visible={props.visible}
			setVisible={props.setVisible}
			title='Chose status'
			onOk={updateTempUserCallingStatusHandler}
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
				onPress={updateRadioValue.bind(this, 'Rejected')}
			>
				<RadioButton
					value='Rejected'
					color={Colors.primary}
					status={radioValue === 'Rejected' ? 'checked' : 'unchecked'}
					onPress={updateRadioValue.bind(this, 'Rejected')}
				/>
				<Text style={styles.modalRadioButtonText}>Rejected</Text>
			</Pressable>

			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={updateRadioValue.bind(this, 'Done')}
			>
				<RadioButton
					value='Done'
					color={Colors.primary}
					status={radioValue === 'Done' ? 'checked' : 'unchecked'}
					onPress={updateRadioValue.bind(this, 'Done')}
				/>
				<Text style={styles.modalRadioButtonText}>Done</Text>
			</Pressable>

			<Pressable
				style={styles.modalRadioButtonContainer}
				onPress={updateRadioValue.bind(this, 'Call Again')}
			>
				<RadioButton
					value='Done'
					color={Colors.primary}
					status={radioValue === 'Call Again' ? 'checked' : 'unchecked'}
					onPress={updateRadioValue.bind(this, 'Call Again')}
				/>
				<Text style={styles.modalRadioButtonText}>Call Again</Text>
			</Pressable>
		</Modal>
	);
};

export default UpdateTempUserCallingStatusModal;
