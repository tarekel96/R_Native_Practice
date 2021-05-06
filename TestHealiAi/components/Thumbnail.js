import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

export const Thumbnail = ({ src = 'https://picsum.photos/200', caption = 'Caption', width = 200, height = 200 }) => {
	const imageSrc = { uri: src };
	return (
		<View style={styles.imageContainer}>
			<ImageBackground
				source={imageSrc}
				style={{
					flex: 1,
					resizeMode: 'cover',
					justifyContent: 'center',
					width,
					height
				}}
			>
				<Text style={styles.imageText}>{caption}</Text>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	imageContainer: {
		height: 200,
		width: 200,
		overflow: 'hidden',
		marginBottom: 10
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},
	imageText: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		backgroundColor: '#8b8b8e',
		padding: 5,
		width: 180,
		borderRadius: 90,
		textAlign: 'center',
		alignSelf: 'center'
	}
});
