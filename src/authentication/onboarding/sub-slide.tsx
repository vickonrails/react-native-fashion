import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Button } from "./components";

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
    marginBottom: 40,
  },
});

interface SubSlideProps {
  subTitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

const SubSlide = ({ subTitle, description, last, onPress }: SubSlideProps) => (
  <View style={styles.container}>
    <Text style={styles.subTitle}>{subTitle}</Text>
    <Text style={styles.description}>{description}</Text>
    <Button
      label={last ? "Let's get Started" : "Next"}
      variant={last ? "primary" : "default"}
      {...{ onPress }}
    />
  </View>
);

export default SubSlide;
