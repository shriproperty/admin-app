import React, { FC } from 'react';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { useNavigation } from '@react-navigation/native';
import Modal from '../../../../components/modal';
import { deleteTempUser } from '../../../../store/tempUsers/tempUsers.services';

interface DeleteTempUserModalProps {
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
	 * Id of contact to delete
	 * @type {string}
	 */
	id: string;
}

/**
 * Delete Contact  confirmation modal
 * @param {object} props
 * @param {boolean} props.visible if `true` props will be visible
 * @param {Function} props.setVisible function to update visible state
 * @param {string} props.id Id of contact to delete
 * @return {JSX.Element} JSX.Element
 */
const DeleteTempUserModal: FC<DeleteTempUserModalProps> = props => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation<DrawerNavigationProp>();

	const okHandler = () => {
		dispatch(deleteTempUser(props.id));
		props.setVisible(false);
		navigation.navigate('TempUsers');
	};

	return (
		<Modal
			visible={props.visible}
			setVisible={props.setVisible}
			title='Are You Sure'
			onOk={okHandler}
		/>
	);
};

export default DeleteTempUserModal;
