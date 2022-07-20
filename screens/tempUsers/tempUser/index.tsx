import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

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

	return <Text>{tempUser.name}</Text>;
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
