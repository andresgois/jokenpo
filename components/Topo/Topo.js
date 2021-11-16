import React from "react";
import { Text, View, Image } from "react-native";

export const Topo = () => {
  return (
    <View>
      <Image 
        style={{width: 420, height: 200}}
        source={ require('../../imgs/logo.jpg')} 
      />
    </View>
  );
}