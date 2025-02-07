import React from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput placeholder="Buscar ideas" style={styles.searchBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
});
