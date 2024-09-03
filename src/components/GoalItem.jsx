import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.value}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    paddingHorizontal: 8,
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.8,
  },
  goalText: {
    fontSize: 18,
    padding: 8,
    color: "white",
  },
});
