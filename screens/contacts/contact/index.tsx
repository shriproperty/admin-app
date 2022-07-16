import React, { FC } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

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
			<Text style={styles.subject}>3BHK Hose for selling in SBP</Text>
			<Text style={[styles.message, styles.marginTop]}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley
			</Text>

			<View style={styles.marginTop}>
				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Status - </Text>
					<Text style={styles.infoContent}>Pending</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Email - </Text>
					<Text style={styles.infoContent}>ayushchugh2006@gmail.com</Text>
				</View>

				<View style={styles.infoContainer}>
					<Text style={styles.infoHeading}>Phone - </Text>
					<Text style={styles.infoContent}>9501852700</Text>
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
