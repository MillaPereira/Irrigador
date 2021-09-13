import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { styles } from "./styles";

import logoImg from "../../assets/fotoPlantinha.png";

export const PlantDetails = ({ visible, setShowDetails }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Minha plantinha</Text>
          <Image source={logoImg} style={styles.fotoPlantinha} />
          <Text style={[styles.text, { marginTop: 0 }]}>
            Nome da planta:
          </Text>
          <TextInput style={styles.input} placeholder="Nome" />
          <Text style={[styles.text, { marginTop: 0 }]}>
            Frequencia de banho (em horas):
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Frequência"
            keyboardType="numeric"
          />
          <Pressable style={[styles.button, styles.buttonClose]}
          onPress={() => setShowDetails(false)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
</View>
  );
};
