import React, { FC, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Button from '../../../components/button';

import styles from './index.styles';
import Colors from '../../../constants/Colors';
import Modal from '../../../components/modal';
import { RadioButton } from 'react-native-paper';

type ContactScreenProps = NativeStackScreenProps<StackParamList, 'Contact'>;

interface ContactProps {
	navigation: ContactScreenProps['navigation'];
	route: ContactScreenProps['route'];
}

const Contact: FC<ContactProps> = props => {
	const { params } = props.route;
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<ScrollView style={styles.container}>
			<Modal
				visible={modalVisible}
				setVisible={setModalVisible}
				title='Chose status'
				//TODO: Update onOk to actual logic
				onOk={() => setModalVisible(false)}
			>
				<View style={styles.modalRadioButtonContainer}>
					<RadioButton
						value='Pending'
						color={Colors.primary}
						status='checked'
					/>
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

			<Text style={styles.subject}>{params.name}</Text>
			<Text style={[styles.message, styles.marginTop]}>{params.message}</Text>

			<View style={styles.marginTop}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Status - </Text>

					<View style={styles.flexRow}>
						<Text style={styles.infoContent}>{params.status}</Text>
						<Pressable
							style={styles.pencilIcon}
							onPress={() => setModalVisible(true)}
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
				<Button rippleEffect title='Delete' type='outlined' icon='delete' />
			</View>
		</ScrollView>
	);
};

export default Contact;
