import React from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [modalIsVisible, setModalIsVisible] = React.useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), text: enteredGoal },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={startAddGoalHandler}
          />
        </View>
        <GoalInput
          isVisible={modalIsVisible}
          onPress={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  value={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            key={(item, index) => item.key}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    width: "100%",
    justifyContent: "center", // Centraliza verticalmentea
  },
  list: {
    width: "100%",
    justifyContent: "center", // Centraliza o conteúdo dentro da lista
  },
  button: {
    marginBottom: 30,
  },
});
