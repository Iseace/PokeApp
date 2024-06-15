import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Card({ data = null, navigation }) {
  function handleClick() {
    navigation.navigate("Details", { url: data?.url });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.text}>{data?.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    color: "white",
    height: 50,
    width: 150,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
