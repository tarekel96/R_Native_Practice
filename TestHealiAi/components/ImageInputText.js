import React, { useState } from 'react';
import { ImageBackground, Text, View, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
export const ImageInputText = ({ imgSrc = 'https://picsum.photos/200' }) => {
	const imageSource = {
		uri: imgSrc
	};
	const [ imgCaption, setImageCaption ] = useState('Caption');
	const [ inputState, setInputState ] = useState('');

	const handleInputChange = (value) => setInputState(value);
	const handleSubmit = () => {
		setImageCaption(inputState);
		setInputState('');
	};

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageBackground
					source={imageSource}
					style={{
						width: 200,
						height: 200,
						flex: 1,
						resizeMode: 'cover',
						justifyContent: 'center'
					}}
				>
					<Text style={styles.imageText}>{imgCaption}</Text>
				</ImageBackground>
			</View>
			<View style={styles.inputContainer}>
				<TouchableOpacity>
					<TextInput
						onChangeText={(val) => handleInputChange(val)}
						value={inputState}
						placeholder="Enter Caption..."
					/>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity>
					<Button title="Submit Caption" onPress={handleSubmit} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 0,
		marginTop: 5,
		marginBottom: 5,
		width: '100%',
		height: 300,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	imageContainer: {
		height: 200,
		width: 200,
		overflow: 'hidden',
		marginBottom: 10
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
	},
	inputContainer: {
		backgroundColor: 'white',
		height: 50,
		width: 200
	}
});
