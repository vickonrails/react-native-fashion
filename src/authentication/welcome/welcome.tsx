import React from "react";
import { Dimensions, Image } from "react-native";

import { Button } from "../../components";
import { StackNavigationProps, Routes } from "../../components/Navigation";
import theme, { Box, Text } from "../../components/Theme";

const picture = {
  src: require("../../../assets/images/1.png"),
  width: 3383,
  height: 5070,
};

const { width } = Dimensions.get("window");

const handlePress = () => {
  return;
};

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} borderBottomRightRadius="xl" backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="slide.grey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderBottomRightRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          flex={1}
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={handlePress}
          />
          <Button
            label="Join us, it's free"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={handlePress}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
