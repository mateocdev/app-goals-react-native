import { FlatList, Text, View } from "react-native";
export const GoalItem = ({ courseGoals }) => {
  return (
    <FlatList
      data={courseGoals}
      alwaysBounceHorizontal={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item}</Text>
          </View>
        );
      }}
    />
  );
};
