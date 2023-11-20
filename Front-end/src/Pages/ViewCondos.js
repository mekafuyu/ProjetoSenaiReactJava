import styles from "../Themes/LightTheme";
import MButton from "../Components/MButton";
import { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React from "react";

export default class ViewCondos extends React.Component {
    constructor(props) {
      super(props);
      this.state = [{name: "", cep: ""}];
    }

    componentDidMount() {
        axios.get("http://localhost:8080/condominium")
             .then((data) => this.setCondos(data.data));
        console.log(this.condos)
    }
  
    render() {
      return (
            <SafeAreaView>
                <View style={styles.container}>
                    {condos.map((condo,index) =>
                    <View
                        key={index}
                        index={index}
                        style={{backgroundColor: "white"}}>
                        <Text>
                            {condo.name}
                        </Text>
                        <Text>
                            {condo.cep}
                        </Text>
                    </View>
                    )}
                </View>
            </SafeAreaView>
        );
    }
}




// export function ViewCondos(props){
//     const [condos, setCondos] = useState([{name: "", cep: ""}, {name: "", cep: ""}])

//     useEffect(() => {
//         axios.get("http://localhost:8080/condominium").then((data) => setCondos(data.data));
//         console.log(condos)
//     })
    
//     return(
//         <SafeAreaView>
//             <View style={styles.container}>
//                 {condos.map((condo,index) =>
//                     <View
//                         key={index}
//                         index={index}
//                         style={{backgroundColor: "white"}}>
//                         <Text>
//                             {condo.name}
//                         </Text>
//                         <Text>
//                             {condo.cep}
//                         </Text>
//                     </View>
//                 )}
//             </View>
//         </SafeAreaView>
//     )
// }