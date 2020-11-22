import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler}) {
  return(
      <View style={styles.item}>
        <TouchableOpacity onPress = {() =>pressHandler(item.key)}>
          <MaterialIcons name='delete' size={25} color='black'/>
        </TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10, flexDirection: 'row',
        textAlignVertical: 'center'
    },
    itemText: {
      fontSize: 20,
      marginLeft: 10
    }
})