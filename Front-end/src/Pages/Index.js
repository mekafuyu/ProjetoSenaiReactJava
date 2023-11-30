import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import MSelect from "../Components/MSelect";
import { SafeAreaView, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React,{useContext} from "react";
import { UtilsContext } from "../Contexts/UtilsContext";

export class Index extends React.Component{
  static utils = UtilsContext;

  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
  }

  componentDidMount(){
  }

  render (){
    return(
      <SafeAreaView>
        <View style={styles.container}>
          <MButton
            onPress={() => {
              console.log(this.UtilsContext)
              if(!this.utils)
                this.props.navigation.navigate("Login")
            }}
            icon={faRightToBracket}
            value="Login"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("HomeFunc")}
            icon={faRightToBracket}
            value="Login Func"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("Cadastro")}
            color="yellow"
            value="Cadastro"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("NewCondo")}
            color="yellow"
            value="Novo Condominio"
          ></MButton>
          <MButton
            onPress={() => this.props.navigation.navigate("ViewCondos")}
            color="yellow"
            value="Ver Condominios"
          ></MButton>          
        </View>
      </SafeAreaView>
    )
  };
}
