import React, { FC, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../../components/button';

import styles from './index.styles';
import Colors from '../../../constants/Colors';
import DeleteContactModal from './modals/DeleteContactModal';
import UpdateContactModal from './modals/UpdateContactModal';

type NavigationProps = NativeStackScreenProps<StackParamList, 'Contact'>;

interface ContactProps {
	navigation: NavigationProps['navigation'];
	route: NavigationProps['route'];
}

const Contact: FC<ContactProps> = props => {
	const { params } = props.route;
	const [updateContactModalVisible, setUpdateContactModalVisible] =
		useState(false);
	const [deleteContactModalVisible, setDeleteContactModalVisible] =
		useState(false);

	return (
		<ScrollView style={styles.container}>
			<DeleteContactModal
				visible={deleteContactModalVisible}
				setVisible={setDeleteContactModalVisible}
				id={params._id}
			/>
			<UpdateContactModal
				visible={updateContactModalVisible}
				setVisible={setUpdateContactModalVisible}
			/>

			<Text style={styles.subject}>{params.subject}</Text>
			<Text style={[styles.message, styles.marginTop]}>{params.message}</Text>

			<View style={styles.marginTop}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Status - </Text>

					<View style={styles.flexRow}>
						<Text style={styles.infoContent}>{params.status}</Text>
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
					<Text style={styles.infoContent}>{params.email}</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Phone - </Text>
					<Text style={styles.infoContent}>{params.phone}</Text>
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

export default Contact;
