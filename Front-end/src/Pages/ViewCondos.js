import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

export class ViewCondos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { condos: [{ id: "", name: "", cep: "" }] };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/condominium").then((data) => {
      this.setState({ ...this.state, condos: data.data });
    });
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {this.state.condos.map((condo, index) => (
            <View
              key={index}
              index={index}
              style={{ backgroundColor: "white" }}
            >
              <Text>{condo.name}</Text>
              <Text>{condo.cep}</Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}
