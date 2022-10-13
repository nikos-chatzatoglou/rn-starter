import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
const ListScreens = () => {
	const friends = [
		{ name: "Friend #1", age: 20 },
		{ name: "Friend #2", age: 45 },
		{ name: "Friend #3", age: 32 },
		{ name: "Friend #4", age: 27 },
		{ name: "Friend #5", age: 53 },
		{ name: "Friend #6", age: 30 },
		{ name: "Friend #7", age: 21 },
		{ name: "Friend #8", age: 18 },
		{ name: "Friend #9", age: 24 },
	];

	return (
		<FlatList
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			keyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({ item }) => {
				//element === { item: { name: 'Friend #1' }, index: 0 }
				//item === { name: 'Friend #1' }
				return (
					<Text style={styles.textStyle}>
						My fellow : {item.name} is {item.age} years old
					</Text>
				);
			}}
		/>
	);
};
const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		marginVertical: 15,
	},
});

export default ListScreens;
