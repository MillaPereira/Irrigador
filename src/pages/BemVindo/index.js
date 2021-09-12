import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export default function BemVindo() {
  const navigation = useNavigation();

  function navigateToPlants() {
    navigation.navigate("Incidents" /*, { incident }*/);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>
          Bem Vindo(a)! Como podemos te chamar?
        </Text>
      </View>

      <TextInput style={styles.input} placeholder="Digite seu nome" />
      <View style={styles.line} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToPlants()}
      >
        <Text style={styles.textoBotao}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
