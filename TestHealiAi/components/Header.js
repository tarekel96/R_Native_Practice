import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = ({ heading = 'Header' }) => {
	return (
		<View style={styles.headerView}>
			<Text style={styles.headerText}>{heading}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerView: {
		height: 50,
		maxHeight: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '10%',
		marginBottom: 5,
		backgroundColor: '#8fbc8f',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5
	},
	headerText: {
		fontSize: 30
	}
});
