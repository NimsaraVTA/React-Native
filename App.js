import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './component/header';
import Todoitem from './component/todoitems';
import Addtodo from './component/addtodo';

export default function App() {

    const [todos, setTodos] = useState([

        { text: 'Buy Coffee', key: '1' },
        { text: 'Create an App', key: '2' },
        { text: 'Play on the Switch', key: '3' },

    ]);

    const pressHandler = (key) => {

        setTodos((prevTodos) => {

            return prevTodos.filter(todo => todo.key != key)

        });

    }

    const submitHandler = (text) => {

        setTodos((prevTodos) => {

            return [

                { text: text, key: Math.random().toString() },
                ...prevTodos

        ];

        })
        

    }

  return (
    <View style={styles.container}>
          {/*header*/}
          <Header />
         
          <View style={styles.content}>
              {/*to from*/}
              <Addtodo submitHandler={submitHandler} />

              <View style={styles.list}>

                  <FlatList

                      data={todos}
                      renderItem={({item}) => (

                          <Todoitem item={item} pressHandler={pressHandler} />

                          )}

                  />

              </View>

          </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },

    content: {

        padding:40,
    },

    list: {

        marginTop:20,
    }
});
