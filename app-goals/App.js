import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalItem courseGoals={courseGoals} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 10,
    width: "100%",
  },
  textInput: {
    borderColor: "grey",
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
    width: "80%",
  },
});
