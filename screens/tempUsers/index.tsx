import React, { FC, useEffect, useState } from 'react';
import { Text, FlatList, RefreshControl } from 'react-native';
import { DataTable } from 'react-native-paper';
import tableStyles from '../../styles/table.styles';
import { useAppDispatch } from '../../hooks';
import { connect } from 'react-redux';
import { fetchAllTempUsers } from '../../store/tempUsers/tempUsers.services';
import Colors from '../../constants/Colors';
import { Link } from '@react-navigation/native';

interface TableRowProps {
	item: TempUser;
}

const TableRow: FC<TableRowProps> = props => {
	const { item } = props;

	return (
		<DataTable.Row>
			<DataTable.Cell>
				<Link to={{ screen: 'TempUser', params: item }}>
					<Text style={tableStyles.main}>{item.name}</Text>
				</Link>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.phone}</Text>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.callingStatus}</Text>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.callAgainDate ? item.callAgainDate : '——–'}</Text>
			</DataTable.Cell>
		</DataTable.Row>
	);
};

interface TempUsersProps {
	tempUsers: TempUser[];
}

const TempUsers: FC<TempUsersProps> = props => {
	const dispatch = useAppDispatch();
	const [refreshing, setRefreshing] = useState(true);

	useEffect(() => {
		dispatch(fetchAllTempUsers());
		setRefreshing(false);
	}, [refreshing]);

	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Name</DataTable.Title>
				<DataTable.Title>Phone</DataTable.Title>
				<DataTable.Title>Calling Status</DataTable.Title>
				<DataTable.Title>Call Again</DataTable.Title>
			</DataTable.Header>

			<FlatList
				data={props.tempUsers}
				renderItem={TableRow}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						colors={[Colors.primary]}
						onRefresh={() => setRefreshing(true)}
					/>
				}
			/>
		</DataTable>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		tempUsers: state.tempUsers.value,
	};
};

export default connect(mapStateToProps)(TempUsers);
