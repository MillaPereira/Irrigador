import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";

export const BottomButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Feather name="plus-circle" size={70} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};
