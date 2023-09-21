import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import stylesReg from "./styles";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationForm = () => {
  return (
    <View style={stylesReg.container}>
      <View style={stylesReg.avatarContainer}>
        <View style={stylesReg.imageContainer}>
          {/* <Image style={stylesReg.avatar}></Image> */}
        </View>
        <Pressable style={stylesReg.buttonAdd}>
          <View>
            <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
          </View>
        </Pressable>
      </View>

      <View>
        <Text style={stylesReg.title}>Registration</Text>
      </View>
      <View style={stylesReg.formReg}>
        <TextInput
          style={[stylesReg.textInput, stylesReg.inputFocus]}
          // value={name}
          // onChangeText={setName}
          placeholder="Login"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={stylesReg.textInput}
          // value={name}
          // onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          style={stylesReg.textInput}
          // value={name}
          // onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#BDBDBD"
        />
        <Pressable style={stylesReg.button}>
          <Text style={stylesReg.buttonText}>Registration</Text>
        </Pressable>
        <Pressable>
          <Text style={stylesReg.loginText}>Already registered? Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};
