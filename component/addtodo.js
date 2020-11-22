import React,{useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {

  const [text, setText] = useState("");
  const changeHandler = (val) => {
        return setText(val);
  };
  return(
    <View>
      <TextInput 
        style={styles.input}
        placeholder= 'Add new'
        onChangeText= {changeHandler}
        value = {text}
      />
      <Button onPress={() => {
          setText("");
          submitHandler(text);
          }}
        title='Add' color='black'/>
    </View>
    )
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        borderStyle: 'dashed'
    }
})