import React, { FC, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../../components/button';

import styles from './index.styles';
import Colors from '../../../constants/Colors';
import DeleteContactModal from './modals/DeleteContactModal';
import UpdateContactStatusModal from './modals/UpdateContactStatusModal';
import { connect } from 'react-redux';
import { DrawerScreenProps } from '@react-navigation/drawer';
import useFormatDate from '../../../hooks/useFormatDate';

type NavigationProps = CompositeScreenProps<
	NativeStackScreenProps<StackParamList, 'Contact'>,
	DrawerScreenProps<DrawerParamList>
>;

interface ContactProps {
	navigation: NavigationProps['navigation'];
	route: NavigationProps['route'];
	contact: Contact;
}

const Contact: FC<ContactProps> = props => {
	const { contact } = props;
	const formatDate = useFormatDate();

	const [updateContactModalVisible, setUpdateContactModalVisible] =
		useState(false);
	const [deleteContactModalVisible, setDeleteContactModalVisible] =
		useState(false);

	return (
		<ScrollView style={styles.container}>
			<DeleteContactModal
				visible={deleteContactModalVisible}
				setVisible={setDeleteContactModalVisible}
				id={contact._id}
			/>
			<UpdateContactStatusModal
				visible={updateContactModalVisible}
				setVisible={setUpdateContactModalVisible}
				id={contact._id}
			/>

			<Text style={styles.subject}>{contact.subject}</Text>
			<Text style={[styles.message, styles.marginTop]}>{contact.message}</Text>

			<View style={styles.marginTop}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Created - </Text>
					<Text style={styles.infoContent}>
						{formatDate(contact.createdAt)}
					</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Status - </Text>

					<View style={styles.flexRow}>
						<Text style={styles.infoContent}>{contact.status}</Text>
						<Pressable
							style={styles.pencilIcon}
							onPress={() => setUpdateContactModalVisible(true)}
						>
							<Ionicons name='pencil' size={25} color={Colors.primary} />
						</Pressable>
					</View>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Email - </Text>
					<Text style={styles.infoContent}>{contact.email}</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Phone - </Text>
					<Text style={styles.infoContent}>{contact.phone}</Text>
				</View>
			</View>

			<View style={styles.buttonContainer}>
				<Button
					rippleEffect
					title='Delete'
					type='outlined'
					icon='delete'
					onPress={() => setDeleteContactModalVisible(true)}
				/>
			</View>
		</ScrollView>
	);
};

const mapStateToProps = (state: RootState, ownProps: ContactProps) => {
	const { params } = ownProps.route;

	const foundContact = state.contacts.value.find(
		contact => contact._id === params._id
	);

	if (!foundContact) return ownProps.navigation.navigate('Contacts');

	return {
		contact: foundContact,
	};
};

export default connect(mapStateToProps)(Contact);
