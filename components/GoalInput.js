import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

//const GoalItem = props => {
//  return (<View  style={styles.listItem}><Text>{props.title}</Text></View>);
//};
const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (enteredGoal)  => {
    setEnteredGoal(enteredGoal);
  };


  return (
  <View style={styles.inputContainer}>
  <TextInput placeholder="Course Goal"
  style={styles.textInput}
  onChangeText={goalInputHandler}
  value={enteredGoal}
  />
  <Button title="Add" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
</View>)
};

const styles = StyleSheet.create({
  inputContainer: {flexDirection: 'row',
                   justifyContent:'space-between',
                   alignItems:'center'},
  textInput:{ width: "80%",
              borderColor:'black',
              borderWidth: 1,
              padding:10}

                 });

export default GoalInput;
