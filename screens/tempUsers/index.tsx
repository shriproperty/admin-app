import React, { FC } from 'react';
import { Text, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import tableStyles from '../../styles/table.styles';

const DATA: TempUser[] = [
	{
		_id: 'hello',
		name: 'Ayush',
		phone: '9501852700',
		callingStatus: 'Pending',
		callAgainDate: '11/12/2006',
		email: 'ayushchugh2006@gmail.com',
	},
	{
		_id: 'hello',
		name: 'Ayush',
		phone: '9501852700',
		callingStatus: 'Call Again',
		callAgainDate: '11/12/2006',
		email: 'ayushchugh2006@gmail.com',
	},
	{
		_id: 'hello',
		name: 'Ayush',
		phone: '9501852700',
		callingStatus: 'Pending',
		email: 'ayushchugh2006@gmail.com',
	},
];

interface TableRowProps {
	item: TempUser;
}

const TableRow: FC<TableRowProps> = props => {
	const { item } = props;

	return (
		<DataTable.Row>
			<DataTable.Cell>
				<Text style={tableStyles.main}>{item.name}</Text>
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

const TempUsers: FC = () => {
	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Name</DataTable.Title>
				<DataTable.Title>Phone</DataTable.Title>
				<DataTable.Title>Calling Status</DataTable.Title>
				<DataTable.Title>Call Again</DataTable.Title>
			</DataTable.Header>

			<FlatList data={DATA} renderItem={TableRow} />
		</DataTable>
	);
};

export default TempUsers;
