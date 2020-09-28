import React, { useState } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../../../components/Theme";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;

type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);

  const reColor: keyof typeof theme.colors =
    // eslint-disable-next-line no-nested-ternary
    state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger";

  const color = theme.colors[reColor];

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text: string) => {
    setInput(text);
    if (state === Pristine) {
      validate();
    }
  };

  return (
    <Box
      flexDirection="row"
      height={48}
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
      alignItems="center"
      borderRadius="s"
    >
      <Box padding="s">
        <Icon name={icon} size={16} color={color} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};
export default TextInput;
