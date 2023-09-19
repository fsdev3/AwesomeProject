import { StyleSheet } from "react-native";

const stylesReg = StyleSheet.create({
  regContainer: {
    flexGrow: 1,
  },
  bgContainer: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
  },
  imageContainer: {
    position: "relative",
    width: 120,
    height: 120,
    // borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  buttonAdd: {},
  title: {
    color: "black",
    fontSize: 30,
    // fontFamily: "Roboto-500",
    textAlign: "center",
    marginBottom: 16,
  },
  formReg: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    height: 50,
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 16,
    stroke: "red",
  },

  button: {
    width: "100%",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    marginTop: 43,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  loginText: {
    marginTop: 16,
    marginBottom: 45,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});

export default stylesReg;
