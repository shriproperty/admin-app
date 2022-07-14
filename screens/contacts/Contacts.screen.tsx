import React, { FC } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import Colors from '../../constants/Colors';

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

export default Contacts;
