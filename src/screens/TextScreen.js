import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
// every time i use TextInput i will use useState
// TextInput is a controlled element
// value is the value of the state
// onChangeText is a callback function that will be called with the new value whenever the text changes
// onChangeText={(newValue) => setName(newValue)} is the same as onChangeText={setName}
const TextScreen = () => {
	const [password, setPassword] = useState("");
	const isPasswordValidated = (value) => {
		console.log(value.lenght);
		if (value.length < 5) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				style={styles.input}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			<Text>My password is {password}</Text>
			{isPasswordValidated(password) ? null : (
				<Text> The password must be up to 5 characters</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;

// <View>
// 			<Text>Enter Name:</Text>
// 			<TextInput
// 				autoCapitalize='none'
// 				autoCorrect={false}
// 				style={styles.input}
// 				value={name}
// 				onChangeText={(newValue) => setName(newValue)}
// 			/>
// 			<Text>My name is {name}</Text>
// 		</View>
// 	);
