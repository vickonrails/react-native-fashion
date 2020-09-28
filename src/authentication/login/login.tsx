import React from "react";
import { Alert } from "react-native";

import { Button, Container, Text } from "../../components";
import { Box } from "../../components/Theme";
import TextInput from "../components/forms/text-input";
import SocialLogin from "../components/social-login";
import Checkbox from "../components/forms/checkbox";

const validator = (input: string) =>
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input
  );

const handlePress = () => {
  return;
};

const passwordValidator = (password: string) => password.length >= 6;

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => Alert.alert("Alert pressed")}
        >
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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text textAlign="center" variant="body" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            placeholder="Enter your Email"
            icon="mail"
            validator={validator}
          />
        </Box>
        <TextInput
          placeholder="Enter your Password"
          icon="lock"
          validator={passwordValidator}
        />

        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remember me?" />
          <Button variant="transparent" onPress={handlePress}>
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>

        <Box alignItems="center">
          <Button
            variant="primary"
            onPress={() => true}
            label="Log in to your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
