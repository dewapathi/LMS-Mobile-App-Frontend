import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { forgotPasswordStyles } from "@/styles/auth";
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_400Regular,
  useFonts,
} from "@expo-google-fonts/nunito";
import { TextInput } from "react-native-gesture-handler";
import { router } from "expo-router";

export default function ForgotPassword() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={forgotPasswordStyles.container}
    >
      <Text
        style={[
          forgotPasswordStyles.headerText,
          { fontFamily: "Nunito_700Bold" },
        ]}
      >
        Reset Email Password
      </Text>
      <TextInput
        style={[
          forgotPasswordStyles.input,
          { fontFamily: "Nunito_400Regular" },
        ]}
        placeholder="lakruwan@gmail.com"
        keyboardType="email-address"
      />
      <TouchableOpacity style={forgotPasswordStyles.button}>
        <Text
          style={[
            forgotPasswordStyles.buttonText,
            { fontFamily: "Nunito_600SemiBold" },
          ]}
        >
          Send
        </Text>
      </TouchableOpacity>
      <View style={[forgotPasswordStyles.loginLink]}>
        <Text
          style={[
            forgotPasswordStyles.backText,
            { fontFamily: "Nunito_700Bold" },
          ]}
        >
          Back To?
        </Text>
        <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
          <Text
            style={[
              forgotPasswordStyles.loginText,
              { fontFamily: "Nunito_700Bold" },
            ]}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
