import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },
  fotoPlantinha: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 60,
  },
  modalView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    width: 300,
    height: 500,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#86DB78",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
      //borderBottomWidth: 1,
      //borderBottomColor: '#000',
  }
});