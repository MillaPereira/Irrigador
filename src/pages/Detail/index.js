import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking, TextInput, onChangeText } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
//import { CalendarPicker } from 'react-native-calendar-picker';

import logoImg from '../../assets/fotoPlantinha.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  // const incident = route.params.incident;
  // const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

   function navigateBack() {
     navigation.goBack()
   }

  // function sendMail() {
  //   MailComposer.composeAsync({
  //     subject: `Herói do caso: ${incident.title}`,
  //     recipients: [incident.email],
  //     body: message,
  //   })
  // }

  // function sendWhatsapp() {
  //   Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  // }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/fundo.png')} style={styles.backgroundImage} />
      <View style={styles.header}>
        {/* <Image source={logoImg} /> */}

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#20751A" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Image source={logoImg} style={styles.fotoPlantinha} />
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Nome da planta:</Text>
        <TextInput
        style={styles.input}
        //onChangeText={onChangeText}
        placeholder="Nome"
        />
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Frequencia de banho (em horas):</Text>
        <TextInput
        style={styles.input}
        //onChangeText={onChangeNumber}
        placeholder="Frequência"
        keyboardType="numeric"
        />
      </View>
    </View>
  );
}
