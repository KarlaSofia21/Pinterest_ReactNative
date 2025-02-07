import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BottomMenu() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>🏠 Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>🔍 Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>➕ Crear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>👤 Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});
