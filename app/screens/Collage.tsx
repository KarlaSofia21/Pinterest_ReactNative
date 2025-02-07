import React from "react";
import { View, Image, StyleSheet } from "react-native";

const images = [
  require("../assets/idea1.jpg"),
  require("../assets/idea2.jpg"),
  require("../assets/idea3.jpg"),
  require("../assets/idea4.jpg"),
  require("../assets/libro.jpg"),
];

export default function Collage() {
  return (
    <View style={styles.collage}>
      {images.map((img, index) => (
        <Image key={index} source={img} style={styles.image} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  collage: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: "48%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
});
