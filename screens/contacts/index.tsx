import React, { FC, useEffect } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import { connect } from 'react-redux';

import Colors from '../../constants/Colors';
import { useAppDispatch } from '../../hooks';
import { fetchAllContacts } from '../../store/contacts/contacts.services';

interface ContactsProps {
	contacts: Contact[];
}

const Contacts: FC<ContactsProps> = props => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllContacts());
	}, []);

	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Name</DataTable.Title>
				<DataTable.Title>Status</DataTable.Title>
				<DataTable.Title>Subject</DataTable.Title>
			</DataTable.Header>

			<FlatList data={props.contacts} renderItem={TableRow} />
		</DataTable>
	);
};

const mapStateToProps = (state: RootState) => {
	return {
		contacts: state.contacts.value,
	};
};

interface TableRowProps {
	item: {
		name: string;
		status: string;
		message: string;
	};
}

const TableRow: FC<TableRowProps> = ({ item }) => {
	return (
		<DataTable.Row>
			<DataTable.Cell>
				<Text style={styles.name}>{item.name}</Text>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.status}</Text>
			</DataTable.Cell>

			<DataTable.Cell>
				<Text>{item.message}</Text>
			</DataTable.Cell>
		</DataTable.Row>
	);
};

interface Styles {
	name: TextStyle;
}

const styles = StyleSheet.create<Styles>({
	name: {
		color: Colors.primary,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
	},
});

export default connect(mapStateToProps)(Contacts);
