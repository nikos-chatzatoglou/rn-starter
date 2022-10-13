import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "./components/ImageDetail";
const ImageScreen = () => {
	return (
		<View>
			<Text style={style.textStyle}>ImageScreen here</Text>
			<ImageDetail
				title='Forest'
				imageSource={require("../../assets/forest.jpg")}
			/>
			<ImageDetail
				title='Mountain'
				imageSource={require("../../assets/mountain.jpg")}
			/>
			<ImageDetail
				title='Beach'
				imageSource={require("../../assets/beach.jpg")}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default ImageScreen;
