import { StyleSheet } from "react-native";

const stylesLog = StyleSheet.create({
  regKeyboard: {
    // paddingTop: -150,
  },
  regContainer: {
    flexGrow: 1,
  },
  bgLog: {
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
    paddingTop: 32,
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

  title: {
    color: "black",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
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
    fontSize: 16,
    backgroundColor: "#F6F6F6",
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
    marginBottom: 111,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});

export default stylesLog;
