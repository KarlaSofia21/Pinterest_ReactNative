/*import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Aplicacion 5C</Text>
      <ActivityIndicator/>
      <Text>Ejemplo de app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'#4B2E1E'
  }
});*/

import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from './app/screens/Header';
import Carousel from './app/screens/Carousel';
import Collage from './app/screens/Collage';
import BottomMenu from './app/screens/BottomMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Carousel />
        <Collage />
      </ScrollView>
      <BottomMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});
