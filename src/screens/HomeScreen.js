import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.text}>Hello beachess</Text>
			<Button
				title='Go to Components Demo'
				onPress={() => navigation.navigate("Components")}
			/>
			<Button
				title='Go to List Demo'
				onPress={() => navigation.navigate("List")}
			/>
			<Button
				title='Go to Image Demo'
				onPress={() => navigation.navigate("Images")}
			/>
			<Button
				title='Go to Counter Demo'
				onPress={() => navigation.navigate("Counter")}
			/>
			<Text style={styles.text}>Show me</Text>
			<Button
				title='Go to Color Demo'
				onPress={() => navigation.navigate("Color")}
			/>
			<Button
				title='Go to Square Demo'
				onPress={() => navigation.navigate("Square")}
			/>
			<Button
				title='Go to Text Demo'
				onPress={() => navigation.navigate("Text")}
			/>
			<Button
				title='Go to Box Demo'
				onPress={() => navigation.navigate("Box")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},

	wrapper: {
		marginBottom: 50,
	},
});

export default HomeScreen;
