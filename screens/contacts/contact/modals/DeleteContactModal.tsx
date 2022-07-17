import React, { FC } from 'react';
import Modal from '../../../../components/modal';

interface DeleteContactModalProps {
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
const DeleteContactModal: FC<DeleteContactModalProps> = props => {
	return (
		<Modal
			visible={props.visible}
			setVisible={props.setVisible}
			title='Are You Sure'
			onOk={() => props.setVisible(false)}
		/>
	);
};

export default DeleteContactModal;
