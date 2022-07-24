import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import useFormatDate from '../../../hooks/useFormatDate';
import styles from './index.styles';
import { Divider } from 'react-native-paper';
import Button from '../../../components/button';
import DeleteTempUserModal from './modals/DeleteTempUserModal';
import UpdateTempUserCallingStatusModal from './modals/UpdateTempUserCallingStatusModal';
import Colors from '../../../constants/Colors';

type NavigationProps = CompositeScreenProps<
	NativeStackScreenProps<StackParamList, 'TempUser'>,
	DrawerScreenProps<DrawerParamList>
>;

interface TempUserProps {
	navigation: NavigationProps['navigation'];
	route: NavigationProps['route'];
	tempUser: TempUser;
}

const TempUser: FC<TempUserProps> = props => {
	const { tempUser } = props;
	const formatDate = useFormatDate();

	const [deleteTempUserModalVisible, setDeleteTempUserModalVisible] =
		useState(false);
	const [
		updateTempUserCallingStatusModalVisible,
		setUpdateTempUserCallingStatusModalVisible,
	] = useState(false);

	return (
		<ScrollView style={styles.container}>
			<DeleteTempUserModal
				id={tempUser._id}
				visible={deleteTempUserModalVisible}
				setVisible={setDeleteTempUserModalVisible}
			/>

			<UpdateTempUserCallingStatusModal
				id={tempUser._id}
				visible={updateTempUserCallingStatusModalVisible}
				setVisible={setUpdateTempUserCallingStatusModalVisible}
			/>

			<View style={styles.infoContainer}>
				<Text style={styles.infoHeading}>Name - </Text>
				<Text style={styles.name}>{tempUser.name}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoHeading}>Date - </Text>
				<Text style={[styles.infoContent, styles.colorAccent]}>
					{formatDate(tempUser.createdAt)}
				</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoHeading}>Calling Status - </Text>

				<View style={styles.flexRow}>
					<Text style={[styles.infoContent, styles.colorAccent]}>
						{tempUser.callingStatus}
					</Text>

					<Pressable
						style={styles.pencilIcon}
						onPress={() => setUpdateTempUserCallingStatusModalVisible(true)}
					>
						<Ionicons name='pencil' size={25} color={Colors.primary} />
					</Pressable>
				</View>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoHeading}>Call Again On - </Text>
				<Text style={[styles.infoContent, styles.colorAccent]}>
					{formatDate(tempUser.callAgainDate)}
				</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoHeading}>Email - </Text>
				<Text style={styles.infoContent}>{tempUser.email}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.infoHeading}>Phone - </Text>
				<Text style={[styles.infoContent]}>{tempUser.phone}</Text>
			</View>

			{/*
			 * Talk Progress section will only be shown if there there is talk progress
			 * coming from api
			 */}
			{tempUser.talkProgress && (
				<View style={styles.marginTopBig}>
					<Divider />

					<Text style={[styles.infoHeading, styles.marginTopSmall]}>
						Talk Progress -
					</Text>
					<Text style={[styles.talkProgress, styles.marginTopBig]}>
						{tempUser.talkProgress}
					</Text>
				</View>
			)}

			<View style={styles.buttonContainer}>
				<Button
					rippleEffect
					title='Delete'
					type='outlined'
					icon='delete'
					onPress={() => setDeleteTempUserModalVisible(true)}
				/>
			</View>
		</ScrollView>
	);
};

const mapStateToProps = (state: RootState, ownProps: TempUserProps) => {
	const { params } = ownProps.route;

	/**
	 * find the current temp user from state using id provided in params
	 * and if temp user is not in the state than navigate to `TempUsers` screen
	 */
	const foundTempUser = state.tempUsers.value.find(
		tempUser => tempUser._id === params._id
	);

	if (!foundTempUser) return ownProps.navigation.navigate('TempUsers');

	return {
		tempUser: foundTempUser,
	};
};

export default connect(mapStateToProps)(TempUser);
