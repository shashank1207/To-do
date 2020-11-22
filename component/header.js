import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorPropType, StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My To-do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        paddingTop: 8,
        marginTop:30,
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    }
});