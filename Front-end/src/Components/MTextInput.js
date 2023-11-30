import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "../Themes/LightTheme";

export default function MTextInput(props) {
  const [view, setView] = useState(false);

  const value = props.value;
  const setValue = props.setValue;
  return (
    <View style={styles.MTextInputCont}>
      <Text style={styles.MTextInputLabel}>{props.label}</Text>
      <View style={styles.MTextInputField}>
        <TextInput
          style={{width:'100%'}}
          secureTextEntry={view ? false : props.secureTextEntry}
          onChangeText={(text) => setValue(text)}
        ></TextInput>
        {props.secureTextEntry ?
        <Pressable onPress={() => setView(!view)}>
          {view ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
        </Pressable> : null}
      </View>
    </View>
  );
}
