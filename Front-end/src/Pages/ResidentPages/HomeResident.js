import styles from "../../Themes/LightTheme";
import MButton from "../../Components/MButton";
import { SafeAreaView, Text, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";

export class HomeResident extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: {user: "", userId: ""}
    };
  }

  componentDidMount() {
    this.getUserFromSession()
  }

  async getUserFromSession(){
    let stringJson = sessionStorage.getItem('loggedUser')
    if(!stringJson)
      this.props.navigation.navigate("Login");
    this.setState({...this.state, loggedUser: await JSON.parse(stringJson)});
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Olá, {this.state.loggedUser.user}</Text>
          <MButton
            onPress={() => this.props.navigation.navigate("Reserva")}
            value="Reservar Vaga/Churrasqueira"
          ></MButton>
          <MButton onPress={() => console.log("a")} value="Denuncia"></MButton>
          <MButton
            onPress={() => console.log("a")}
            value="Gerar boleto"
          ></MButton>
          <MButton onPress={() => console.log("a")} value="Votações"></MButton>
        </View>
      </SafeAreaView>
    );
  }
}
