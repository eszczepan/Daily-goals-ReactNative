import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleGoalInput = (e) => {
    setEnteredGoal(e);
  };

  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const handleCancelGoal = () => {
    onCancel();
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Daily goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={handleGoalInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Cancel"
              color="red"
              onPress={handleCancelGoal}
            />
          </View>
          <View style={styles.button}>
            <Button style={styles.button} title="Add" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
