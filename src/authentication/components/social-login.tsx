import React from "react";
import { Image } from "react-native";

import theme, { Box } from "../../components/Theme";

const icons = {
  google: require("../../../assets/icons/google-logo.png"),
  facebook: require("../../../assets/icons/facebook-icon.png"),
  apple: require("../../../assets/icons/apple-logo.png"),
};

const SIZE = theme.borderRadii.l * 2;

const Google = () => (
  <Image source={icons.google} style={{ height: 25, width: 25 }} />
);
const Facebook = () => (
  <Image source={icons.facebook} style={{ height: 25, width: 25 }} />
);
const Apple = () => (
  <Image source={icons.apple} style={{ height: 25, width: 25 }} />
);

const SocialIcon = ({ children }: { children: React.ReactChild }) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center">
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
