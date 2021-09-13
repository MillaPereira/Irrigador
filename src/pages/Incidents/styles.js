import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#86DB78",
    opacity: 0.87,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#13131a",
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#FFF",
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#20751A",
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold",
  },

  fotoPlantinha: {
    marginRight: 20,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    position: "absolute",
  },

  footer: {
    backgroundColor: "#20751A",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  scroller: {
    paddingHorizontal: 24,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 500,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
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
  buttonOpen: {
    backgroundColor: "#F194FF",
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
});
