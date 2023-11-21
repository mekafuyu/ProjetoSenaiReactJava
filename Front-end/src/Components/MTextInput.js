import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Themes/LightTheme";

export default function MTextInput(props) {
  const value = props.value;
  const setValue = props.setValue;
  return (
    <View style={styles.MTextInputCont}>
      <Text style={{ color: "white", textAlign: "left" }}>{props.label}</Text>
      <TextInput
        style={{ backgroundColor: "white", width: "100%", borderRadius: 20 }}
        onChangeText={(text) => setValue(text)}
      ></TextInput>
    </View>
  );
}
