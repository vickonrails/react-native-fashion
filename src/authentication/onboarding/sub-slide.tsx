import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#0C0D34",
    padding: 44,
  },
  subTitle: {
    fontFamily: "SFProText-Semibold",
    marginBottom: 12,
    fontSize: 24,
    lineHeight: 30,
    color: "#0C0D34",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
  },
});

interface SubSlideProps {
  subTitle: string;
  description: string;
  last: boolean;
}

const SubSlide = ({ subTitle, description, last }: SubSlideProps) => (
  <View style={styles.container}>
    <Text style={styles.subTitle}>{subTitle}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default SubSlide;
