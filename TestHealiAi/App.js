import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Header } from './components/Header';
import { Thumbnail } from './components/Thumbnail';
import { ImageInputText } from './components/ImageInputText';

const App = () => {
	useEffect(() => {
		function fetchData() {
			fetch('https://jsonplaceholder.typicode.com/photos', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			})
				.then((res) => res.json())
				.then((data) => setList(() => data))
				.catch((error) => {
					console.error(error);
				});
		}
		fetchData();
		console.log(list);
		console.log('END LIST');
	}, []);
	const [ list, setList ] = useState([]);
	if (list.length === 0) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}
	return (
		<View style={styles.mainContainer}>
			<Header heading="Image FlatList" />
			<View style={styles.flatListContainer}>
				<ImageInputText />
				<FlatList
					data={list}
					renderItem={({ item, index }) => (
						<Thumbnail
							key={item.id}
							src={item.thumbnailUrl}
							height={200}
							width={200}
							caption={item.title}
						/>
					)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: 'rgb(34,39,46)',
		height: '100%',
		width: '100%'
	},
	flatListContainer: {
		width: '100%',
		flex: 1,
		alignItems: 'center'
	}
});

export default App;
