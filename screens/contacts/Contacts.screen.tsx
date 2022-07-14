import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';

const DATA = [
	{ name: 'Ayush', status: 'Pending', message: 'This is a message' },
	{ name: 'Arpit', status: 'Pending', message: 'This is a message' },
];

const Contacts: FC = () => {
	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Name</DataTable.Title>
				<DataTable.Title>Status</DataTable.Title>
				<DataTable.Title>Subject</DataTable.Title>
			</DataTable.Header>

			<FlatList data={DATA} renderItem={TableRow} />
		</DataTable>
	);
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
			<DataTable.Cell>{item.name}</DataTable.Cell>
			<DataTable.Cell>{item.status}</DataTable.Cell>
			<DataTable.Cell>{item.message}</DataTable.Cell>
		</DataTable.Row>
	);
};

export default Contacts;
