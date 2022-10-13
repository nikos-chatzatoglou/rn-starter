import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
	console.log(props);
	return (
		<View>
			<Text style={style.textStyle}>ImageDetail of {props.title}</Text>
			<Image source={props.imageSource} />
		</View>
	);
};

const style = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

export default ImageDetail;
