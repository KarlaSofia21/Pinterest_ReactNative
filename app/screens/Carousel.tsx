import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";

const images = [
  require("../assets/libro.jpg"),
  require("../assets/notas.jpg"),
  require("../assets/cuidado.jpg"),
];

export default function Carousel() {
  return (
    <ScrollView horizontal pagingEnabled style={styles.carousel}>
      {images.map((img, index) => (
        <Image key={index} source={img} style={styles.image} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carousel: {
    height: 200,
  },
  image: {
    width: 300,
    height: 200,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
