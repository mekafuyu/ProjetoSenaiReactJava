import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Themes/LightTheme";

export default function MDateInput(props) {
  const value = props.value;
  const setValue = props.setValue;
  return (
    <View style={styles.MTextInputCont}>
      <Text style={styles.MTextInputLabel}>{props.label}</Text>
      <input
        style={styles.MTextInputField}
        type={"date"} />
    </View>
  );
}
