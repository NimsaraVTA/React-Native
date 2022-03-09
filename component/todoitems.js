import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Todoitem({item, pressHandler}) {

	return (

		<TouchableOpacity onPress={() => pressHandler(item.key)}>

			<Text style={styles.item}>{item.text}</Text>

		</ TouchableOpacity>

		)

}

const styles = StyleSheet.create({

	item: {

		padding: 16,
		marginTop: 16,
		borderColor: '#bbb',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,

	},

});