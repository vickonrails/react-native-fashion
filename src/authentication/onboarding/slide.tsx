import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
}

const { width, height } = Dimensions.get("window");

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    backgroundColor: "red",
    height: 100,
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontFamily: "SFProText-Bold",
    lineHeight: 80,
    color: "white",
    textAlign: "center",
  },
});

const Slide: FC<SlideProps> = ({ label, right }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: ((right ? 1 : -1) * width) / 2 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
};

export default Slide;
