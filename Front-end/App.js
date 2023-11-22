import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { UtilsContext } from "./src/Contexts/context";

import { Index } from "./src/Pages/Index";
import { Login } from "./src/pages/Login";
import { Cadastro } from "./src/Pages/Cadastro";
import { ViewCondos } from "./src/Pages/ViewCondos";
import { NewCondo } from "./src/Pages/NewCondo";
// import { Cadastro } from "./src/pages/cadastro"
// import { Calculadora } from "./src/pages/calculadora"
// import { Historico } from "./src/pages/historico"

export default function App() {
  const [utils, setUtils] = useState();

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator
          screenOptions={{ cardStyle: { backgroundColor: "white" } }}
        >
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="NewCondo" component={NewCondo} />
          <Stack.Screen name="ViewCondos" component={ViewCondos} />
          {/* <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Cadastro Funcionário" component={Cadastro} />
          <Stack.Screen name="Cadastro Condomínio" component={Cadastro} /> */}
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  );
}
