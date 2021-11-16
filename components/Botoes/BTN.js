import React from "react";
import { Text, View, Image } from "react-native";

export const BTN = () => {
  return (
    <View>
      <Button title="pedra" onPress={ () => handle('Pedra')} />
      <Button title="papel" onPress={ () => handle('Papel')} />
      <Button title="tesoura" onPress={ () => handle('Tesoura')} />
    </View>
  );
}