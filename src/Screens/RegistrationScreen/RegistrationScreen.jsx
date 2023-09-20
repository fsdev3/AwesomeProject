import React from "react";
import { ImageBackground, KeyboardAvoidingView, View } from "react-native";
import bgImage from "../../Images/bg.jpg";
import { RegistrationForm } from "./RegistrationForm";
import stylesReg from "./styles";

const RegistrationScreen = () => {
  return (
    <KeyboardAvoidingView
      style={stylesReg.regKeyboard}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-180}
    >
      <View style={stylesReg.regContainer}>
        <ImageBackground
          style={stylesReg.bg}
          source={bgImage}
          resizeMode="cover"
        >
          <View style={stylesReg.formContainer}>
            <RegistrationForm />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
