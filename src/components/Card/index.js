import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import plantIcon from "../../assets/fotoPlantinha.png";

export const Card = ({ plantName }) => {
  const hello = () => {
    alert("Detalhes da planta vão aparecer aq");
  };

  return (
    <View style={styles.container}>
      <Image source={plantIcon} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.text}>{plantName}</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.button} onPress={hello}>
        <Fontisto name="more-v-a" size={24} color={theme.colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};
