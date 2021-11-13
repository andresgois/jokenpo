import React from "react";
import { View, Text } from "react-native";
import { styles } from "./App.module";
import { Teste } from "./components/Teste/teste";

const App = () => {

  return(
    <View>
      <Text>Hello wolrd 2</Text>
      <Teste value="Olá" />
    </View>
  )
}

export default App;