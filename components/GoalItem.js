import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f3f3f3",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default GoalItem;
