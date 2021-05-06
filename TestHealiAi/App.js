import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Header } from './components/Header';
import { Thumbnail } from './components/Thumbnail';

const App = () => {
	const [ list, setList ] = useState([
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		},
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		},
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		},
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		},
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		},
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		},
		{
			src: 'https://picsum.photos/200',
			caption: 'Caption',
			width: 200,
			height: 200
		}
	]);
	return (
		<View style={styles.mainContainer}>
			<Header heading="Image FlatList" />
			<View style={styles.flatListContainer}>
				<FlatList
					data={list}
					renderItem={({ item, index }) => (
						<Thumbnail
							key={`ID #${index}`}
							src={item.src}
							height={item.height}
							width={item.width}
							caption={item.caption}
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
