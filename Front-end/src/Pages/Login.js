import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MTextInput from "../Components/MTextInput";
import { SafeAreaView, View } from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "../Contexts/UtilsContext";
import axios from "axios";

export function Login(props) {
  const [currUser, setCurrUser] = useState({ cpf: "", pwd: "" });
  const {utils, setUtils} = useContext(UtilsContext);

  async function tryLogin(user) {
    axios.post("http://localhost:8080/resident/login", currUser)
    .then((res) => {
      setUtils({...utils, currUser: res.data})
      console.log(utils)
      props.navigation.navigate("HomeResident")
    });
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MTextInput
          label="Cpf:"
          value={currUser}
          setValue={(text) => {
            setCurrUser({ ...currUser, cpf: text });
          }}
        ></MTextInput>
        <MTextInput
          label="Senha:"
          value={currUser}
          setValue={(text) => {
            setCurrUser({ ...currUser, pwd: text });
          }}
        ></MTextInput>
        <MButton
          width="100"
          onPress={() => {
            tryLogin();
            // props.navigation.navigate("HomeResident")
          }}
          value="login"
        ></MButton>
      </View>
    </SafeAreaView>
  );
}
