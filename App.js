import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './component/header';
import TodoItem from './component/todoItem';
import AddTodo from './component/addtodo';

export default function App() {
  const [todos, setTodos] = useState([
  ]);

  const pressHandler = (key) => {
    setTodos((todos)=>{
      return todos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    console.log(text);
    if (text.length>3){
      console.log("HERE");
      setTodos((todos) =>{
        return [
          { text: text, key: Math.random().toString()},
          ...todos
        ];
      });
    } 
    else{
      console.log("In alert");
      Alert.alert('Invalid!',"Please enter more than three characters.",[{text:'Okay',onPress: ()=>console.log("alerted")}],{cancelable:false});
    }
  }

  return (
    <TouchableWithoutFeedback onPress= {() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <View style={styles.top}></View>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler = {submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data = {todos}
              renderItem= {({ item }) => (
                <TodoItem item= {item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
    flex: 1, 
  },
  list: {
    marginTop: 10,
    flex: 1, 
  },
  
});
