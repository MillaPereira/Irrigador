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

import api from "../../services/api";
import { styles } from "./styles";

export default function Incidents() {
  //   const [incidents, setIncidents] = useState([]);
  //   const [total, setTotal] = useState(0);

  //   const [page, setPage] = useState(1);
  //   const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Detail" /*, { incident }*/);
  }

  function callModal() {
    setModalVisible(true);
  }

  //   async function loadIncidents() {
  //     if (loading) {
  //       return;
  //     }

  //     if (total > 0 && incidents.length === total) {
  //       return;
  //     }

  //     setLoading(true);

  //     const response = await api.get('incidents', {
  //       params: { page }
  //     });

  //     setIncidents([...incidents, ...response.data]);
  //     setTotal(response.headers['x-total-count']);
  //     setPage(page + 1);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     loadIncidents();
  //   }, []);

  <View style={{ flex: 1 }}>
    <ScrollView>main</ScrollView>
    <View>
      <Text>footer</Text>
    </View>
  </View>;

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Minha plantinha</Text>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
              Nome da planta:
            </Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeText}
              placeholder="Nome"
            />
            <Text style={[styles.incidentProperty, { marginTop: 0 }]}>
              Frequencia de banho (em horas):
            </Text>
            <TextInput
              style={styles.input}
              //onChangeText={onChangeNumber}
              placeholder="Frequência"
              keyboardType="numeric"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.scroller}>
        {/* <ImageBackground source={require('../../assets/fundo.png')} style={styles.imageBackground}> 
          {/* <Image source={require('./assets/image-react-native.png')} style={styles.imageForeground}/> 
          <Text style={styles.text}>React Native</Text>  */}
        {
          //</ImageBackground>  */}
          <View style={styles.header}>
            <Text style={styles.headerText}>
              <Text style={styles.title}>Bem-vinda, Milla!</Text>
            </Text>
          </View>

          /* <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text> */
        }

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => callModal()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => callModal()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateToDetail()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateToDetail()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateToDetail()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateToDetail()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => navigateToDetail()}
          >
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <View style={styles.header}>
            <Image source={logoImg} style={styles.fotoPlantinha} />
            <Text style={styles.incidentProperty}>PLANTA 1</Text>
          </View>

          <TouchableOpacity style={styles.detailsButton}>
            <Feather name="more-vertical" size={16} color="#A5A5A5" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigateToDetail()}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            backgroundColor: "#86DB78",
            borderRadius: 50,
          }}
        >
          <Feather name={"plus-circle"} size={55} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
