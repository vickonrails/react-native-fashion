import React from "react";
import { View } from "react-native";

import { Button, Container, Text } from "../../components";
import { Box } from "../../components/Theme";
import SocialLogin from "../components/social-login";

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent">
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account
            </Text>
            <Text variant="button" color="primary" marginLeft="s">
              Don't have an account
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
