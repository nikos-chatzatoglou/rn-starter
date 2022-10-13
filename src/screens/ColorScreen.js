import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	const randomRgb = () => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
		return `rgb(${red}, ${green}, ${blue})`;
	};
	return (
		<View>
			<Button
				title='Add a Color'
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View style={{ height: 50, width: 50, backgroundColor: item }} />
					);
				}}
			/>
		</View>
	);
};
export default ColorScreen;
