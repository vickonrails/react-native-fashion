import React from "react";
import { View, StyleSheet } from "react-native";

import { Button, Text } from "./components";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#0C0D34",
    padding: 44,
  },
  subTitle: {
    color: "#0C0D34",
    marginBottom: 12,
  },
  description: {
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
    <Text variant="title2" style={styles.subTitle}>
      {subTitle}
    </Text>
    <Text variant="body" style={styles.description}>
      {description}
    </Text>
    <Button
      label={last ? "Let's get Started" : "Next"}
      variant={last ? "primary" : "default"}
      {...{ onPress }}
    />
  </View>
);

export default SubSlide;
