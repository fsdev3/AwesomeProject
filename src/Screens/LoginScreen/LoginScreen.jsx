import React from "react";
import { ImageBackground, KeyboardAvoidingView, View } from "react-native";
import bgImage from "../../Images/bg.jpg";
import stylesLog from "./styles";
import { LoginForm } from "./LoginForm";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={stylesLog.regKeyboard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-230}
    >
      <View style={stylesLog.regContainer}>
        <ImageBackground
          style={stylesLog.bgLog}
          source={bgImage}
          resizeMode="cover"
        >
          <View style={stylesLog.formContainer}>
            <LoginForm />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
