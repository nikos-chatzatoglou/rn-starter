import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
	const name = "V0thrion";
	return (
		<View>
			<Text style={styles.textStyle}>Fuck yeah im how as Fuck</Text>
			<Text style={styles.ram}>With the power of the dark ram ({name})</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	ram: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
