import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bgImage from "../../Images/bg.jpg";
import { RegistrationForm } from "./RegistrationForm";
import stylesReg from "./styles";

const RegistrationScreen = () => {
  return (
    <View style={stylesReg.regContainer}>
      <ImageBackground
        style={stylesReg.bgContainer}
        source={bgImage}
        resizeMode="cover"
      >
        <View style={stylesReg.formContainer}>
          <RegistrationForm />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
