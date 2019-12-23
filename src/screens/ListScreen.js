import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const myGuys = [
    { name: "David", age: 1 },
    { name: "Ugonna", age: 12 },
    { name: "Agi", age: 13 },
    { name: "Sammy", age: 14 }
  ];
  return (
    <FlatList
      data={myGuys}
      keyExtractor={guy => guy.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 60,
    fontSize: 25
  }
});

export default ListScreen;
