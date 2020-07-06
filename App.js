import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, getEnteredGoal] = useState('');

  const goalInputHandler = (enteredText)  => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {};
  return (
    <View style={styles.screen} >
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
      />
      <Button title="Add" />
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {padding:50},
  inputContainer: {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'},
  textInput:{ width: "80%", borderColor:'black', borderWidth: 1, padding:10}

});
