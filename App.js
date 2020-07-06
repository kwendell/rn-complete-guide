import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredGoal)  => {

    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    setCourseGoals([....courseGoals,enteredGoal]);
  };
  return (
    <View style={styles.screen} >
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
      />
      <Button title="Add" onPress={addGoalHandler}/>
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {padding:35},
  inputContainer: {flexDirection: 'row', justifyContent:'space-between', alignItems:'center'},
  textInput:{ width: "80%", borderColor:'black', borderWidth: 1, padding:10}

});
