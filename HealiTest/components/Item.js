import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

export const Item = ({ item, id, setShoppingList }) => {
	const removeItem = (id) => {
		setShoppingList((prevList) => {
			return prevList.filter((item) => item.id !== id);
		});
	};
	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity>
				<View style={styles.subContainer}>
					<Text style={styles.textStyle}>{item}</Text>
					<TouchableOpacity style={styles.iconStyle} onPress={() => removeItem(id)}>
						<Icon name="remove" size={30} color="#900" />
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		height: 50,
		maxHeight: 50,
		backgroundColor: '#c8a2c8',
		borderWidth: 2,
		borderRadius: 10,
		borderColor: '#efefef'
	},
	subContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},
	textStyle: {
		textAlign: 'center',
		fontSize: 30,
		color: 'white',
		flex: 8
	},
	iconStyle: {
		flex: 1
	}
});
