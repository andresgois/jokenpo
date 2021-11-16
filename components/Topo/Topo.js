import React from "react";
import { View, Image } from "react-native";

const topo = require('../../imgs/jokenpo.png');

export const Topo = () => {
  return (
    <View>
      <Image 
        style={{width: 420, height: 200}}
        source={topo} 
      />
    </View>
  );
}