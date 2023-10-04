//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DashboardStack} from '../../route/DashboardRoute';
import Icons from 'react-native-vector-icons/Feather';
import {TodoContext} from '../../context/Context';

const AddNewToDo = () => {
  const {tasks, addTasks} = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add a new task</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your task here"
        placeholderTextColor={Colors.gray500}
        value={todo}
        onChangeText={text => setTodo(text)}
        autoFocus={true}
      />
      <TouchableOpacity style={styles.addBtn} onPress={() => addTasks(todo)}>
        <Icons name="check" size={35} color={Colors.primaryGray} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.primaryGray,
  },
  input: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'aquamarine',
    color: 'white',
  },
  addBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.primaryWhite,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 40,
    right: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 23,
    color: Colors.primaryWhite,
  },
});

//make this component available to the app
export default AddNewToDo;
