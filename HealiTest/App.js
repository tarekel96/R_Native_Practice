import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, TextInput } from 'react-native';

import { Item } from './components/Item';

const App = () => {
	console.log('HERE');
	const [ shoppingList, setShoppingList ] = useState([
		{
			item: 'Milk',
			id: '1'
		},
		{
			item: 'Eggs',
			id: '2'
		},
		{
			item: 'Flour',
			id: '3'
		},
		{
			item: 'Sugar',
			id: '4'
		}
	]);
	const [ text, setText ] = useState('');
	const handleChangeText = (val) => {
		console.log(text);
		setText(val);
	};
	const handleSubmit = () => {
		console.log('SUBMITTED');
		if (text === '') {
			return;
		}
		setShoppingList((prevList) => {
			let newItem = {
				id: String(shoppingList.length + 1),
				item: text
			};
			console.log([ newItem, ...prevList ]);
			return [ newItem, ...prevList ];
		});
	};
	return (
		<View style={styles.container}>
			<Header />
			<TouchableOpacity style={styles.addItemButtonContainer}>
				<Button title="Add Item..." onPress={handleSubmit} />
			</TouchableOpacity>
			<View style={styles.textInputView}>
				<TouchableOpacity>
					<TextInput
						onChangeText={(e) => {
							console.log(text);
							handleChangeText(e);
						}}
						value={text}
						style={{ textAlign: 'center' }}
						placeholder="Add Item..."
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.flatListView}>
				<FlatList
					data={shoppingList}
					renderItem={({ item }) => <Item item={item.item} id={item.id} setShoppingList={setShoppingList} />}
				/>
			</View>
		</View>
	);
};

const Header = ({ heading = 'Shopping List' }) => {
	return (
		<View style={styles.headerView}>
			<Text style={styles.headerText}>{heading}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		paddingTop: 50,
		height: '100%',
		backgroundColor: '#fae7b5',
		alignItems: 'center'
	},
	flatListView: {
		flex: 1,
		width: '90%',
		height: '100%',
		justifyContent: 'center'
	},
	headerView: {
		height: 50
	},
	headerText: {
		fontSize: 36
	},
	addItemButtonContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		width: '90%',
		height: 50,
		backgroundColor: '#87CEFA',
		marginBottom: 5,
		borderRadius: 10
	},
	textInputView: {
		justifyContent: 'center',
		alignContent: 'center',
		width: '90%',
		height: 50,
		backgroundColor: '#87CEFA',
		marginBottom: 5,
		borderRadius: 10
	}
});

const staticData = [
	{
		item: 'Milk',
		id: 1
	},
	{
		item: 'Eggs',
		id: 2
	},
	{
		item: 'Flour',
		id: 3
	},
	{
		item: 'Sugar',
		id: 4
	}
];

export default App;
