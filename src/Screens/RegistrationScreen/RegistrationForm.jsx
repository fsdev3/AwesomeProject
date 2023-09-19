import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import stylesReg from "./styles";
import ButtonAdd from "../../Images/add.svg";

export const RegistrationForm = () => {
  return (
    <View style={stylesReg.container}>
      <View style={stylesReg.avatarContainer}>
        <Pressable style={stylesReg.buttonAdd}>
          <View style={stylesReg.imageContainer}>
            {/* <Image style={stylesReg.avatar}></Image> */}
          </View>

          {/* <ButtonAdd width={25} height={25} /> */}
        </Pressable>
      </View>

      <View>
        <Text style={stylesReg.title}>Registration</Text>
      </View>
      <View style={stylesReg.formReg}>
        <TextInput
          style={stylesReg.textInput}
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
