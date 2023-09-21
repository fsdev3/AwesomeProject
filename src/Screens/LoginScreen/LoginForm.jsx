import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import stylesLog from "./styles";

export const LoginForm = () => {
  return (
    <View style={stylesLog.container}>
      <View>
        <Text style={stylesLog.title}>Login</Text>
      </View>
      <View style={stylesLog.formReg}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={stylesLog.textInput}
            // value={name}
            // onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            style={stylesLog.textInput}
            // value={name}
            // onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="#BDBDBD"
          />
          <Pressable style={stylesLog.button}>
            <Text style={stylesLog.buttonText}>Login</Text>
          </Pressable>
        </KeyboardAvoidingView>
        <Pressable>
          <Text style={stylesLog.loginText}>Don't have account? Register</Text>
        </Pressable>
      </View>
    </View>
  );
};
