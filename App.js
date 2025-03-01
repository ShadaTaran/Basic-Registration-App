import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { loginstyle } from "./src/Styles/MainStyles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match!");
      return;
    }
    Alert.alert("Registering User:", { username, firstname, email, password });
  };

  return (
    <View style={loginstyle.container}>
      <Image
        style={loginstyle.ImageContainer}
        source={require("./src/assets/Monkey_Banana.jpg")}
      />

      <TextInput
        style={loginstyle.TextInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={loginstyle.TextInput}
        placeholder="First Name"
        value={firstname}
        onChangeText={setFirstname}
      />
      
      <TextInput
        style={loginstyle.TextInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={loginstyle.TextInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TextInput
        style={loginstyle.TextInput}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={handleRegister} style={loginstyle.button}>
        <Text style={loginstyle.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
