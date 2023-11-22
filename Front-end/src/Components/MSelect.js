import { useState } from "react";
import { View, Text } from "react-native";
import Select, { NonceProvider } from "react-select";
import styles from "../Themes/LightTheme";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Themes/Metrics";

export default function MSelect(props) {
  return (
    <View>
      <Text style={styles.MTextInputLabel}>{props.label}</Text>
      <Select
        onFocus={props.onFocus}
        placeholder={"Selecione"}
        menuPortalTarget={document.body} 
        styles={{
          menuPortal: (baseStyles) => ({
            ...baseStyles,
            zIndex: 9999 }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            borderColor: state.isFocused ? "grey" : "red",
          }),
          container: (baseStyles) => ({
            ...baseStyles,
            width: props.width
              ? horizontalScale(props.width)
              : styles.MSelectField.width,
          }),
        }}
        options={props.options}
        onChange={(option) => props.onChange(option)}
      />
    </View>
  );
}
