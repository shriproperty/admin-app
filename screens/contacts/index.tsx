import React, { FC, useEffect, useState } from 'react';
import { RefreshControl, Text, FlatList } from 'react-native';
import { Link } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../hooks';
import { fetchAllContacts } from '../../store/contacts/contacts.services';
import tableStyles from '../../styles/table.styles';

interface TableRowProps {
	item: {
		name: string;
		status: string;
		subject: string;
	};
}

const TableRow: FC<TableRowProps> = props => {
	const { item } = props;

	return (
		<DataTable.Row>
			<DataTable.Cell>
				<Link to={{ screen: 'Contact' }}>
					<Text style={tableStyles.main}>{item.name}</Text>
				</Link>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.status}</Text>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.subject}</Text>
			</DataTable.Cell>
		</DataTable.Row>
	);
};

interface ContactsProps {
	contacts: Contact[];
}

const Contacts: FC<ContactsProps> = props => {
	const dispatch = useAppDispatch();
	const [refreshing, setRefreshing] = useState(true);

	useEffect(() => {
		dispatch(fetchAllContacts());
		setRefreshing(false);
	}, [refreshing]);

	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Name</DataTable.Title>
				<DataTable.Title>Status</DataTable.Title>
				<DataTable.Title>Subject</DataTable.Title>
			</DataTable.Header>

			<FlatList
				data={props.contacts}
				renderItem={TableRow}
				keyExtractor={item => item._id}
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
		contacts: state.contacts.value,
	};
};

export default connect(mapStateToProps)(Contacts);
