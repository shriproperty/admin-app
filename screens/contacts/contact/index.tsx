import React, { FC } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

import styles from './index.styles';
import Colors from '../../../constants/Colors';

type ContactScreenProps = NativeStackScreenProps<StackParamList, 'Contact'>;

interface ContactProps {
	navigation: ContactScreenProps['navigation'];
	route: ContactScreenProps['route'];
}

const Contact: FC<ContactProps> = props => {
	const { params } = props.route;

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.subject}>{params.name}</Text>
			<Text style={[styles.message, styles.marginTop]}>{params.message}</Text>

			<View style={styles.marginTop}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Status - </Text>

					<View style={styles.flexRow}>
						<Text style={styles.infoContent}>{params.status}</Text>
						<Pressable style={styles.pencilIcon}>
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
				<Pressable android_ripple={{ color: Colors.ripple }}>
					<Button
						style={styles.button}
						mode='outlined'
						color={Colors.primary}
						icon='check'
					>
						Update
					</Button>
				</Pressable>

				<Pressable android_ripple={{ color: Colors.ripple }}>
					<Button
						style={styles.button}
						mode='outlined'
						color={Colors.primary}
						icon='delete'
					>
						Delete
					</Button>
				</Pressable>
			</View>
		</ScrollView>
	);
};

export default Contact;
