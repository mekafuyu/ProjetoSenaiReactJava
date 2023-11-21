import { useState } from "react";
import Select, { NonceProvider } from "react-select";
import styles from "../Themes/LightTheme";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../Themes/Metrics";

export default function MSelect(props) {
  return (
    <Select
      onFocus={props.onFocus}
      placeholder={props.options}
      styles={{
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
    />
  );
}
