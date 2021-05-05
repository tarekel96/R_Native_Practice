import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Item } from './components/Item';

const App = () => {
	return (
		<View style={styles.container}>
			<Header />
			<TouchableOpacity style={styles.addItemButtonContainer}>
				<Button title="Add Item..." />
			</TouchableOpacity>
			<Item item="milk" />
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
	headerView: {
		height: 50
	},
	headerText: {
		fontSize: 36
	},
	addItemButtonContainer: {
		justifyContent: 'center',
		width: '90%',
		height: 50,
		backgroundColor: '#87CEFA',
		marginBottom: 5,
		borderRadius: 10
	}
});

export default App;
