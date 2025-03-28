import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  Entypo,
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { authStyle } from "@/styles/auth/auth.style";
import { TextInput } from "react-native-gesture-handler";
import { commonStyles } from "@/styles/common/common.styles";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";

export default function SignInScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [userInfo, setUserInfo] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [required, setRequired] = useState("");
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handlePasswordValidation = (value: string) => {
    setUserInfo({ ...userInfo, password: value });

    // Regular Expressions for validation
    const hasNumber = /\d/.test(value); // Checks for at least one digit
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value); // Checks for special character
    const hasMinimumLength = value.length >= 6; // Checks if password length is at least 6

    // Validation Conditions
    if (!hasMinimumLength) {
      setRequired("Password must be at least 6 characters long");
    } else if (!hasNumber) {
      setRequired("Password must contain at least one number");
    } else if (!hasSpecialChar) {
      setRequired("Password must contain at least one special character");
    } else {
      setRequired(""); // Clear error message if all conditions are met
    }
  };

  const handleSignIn = () => {};

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <ScrollView>
        <Image
          style={authStyle.signImage}
          source={require("@/assets/sign-in/sign_in.png")}
        />
        <Text
          style={[authStyle.welcomeText, { fontFamily: "Raleway_700Bold" }]}
        >
          Welcome Back!
        </Text>
        <Text style={authStyle.learningText}>
          Login to your existing account of LMS Acedemy
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[commonStyles.input, { paddingLeft: 40 }]}
            keyboardType="email-address"
            value={userInfo.emailOrUsername}
            placeholder="lakruwan@creatit.com.au"
            placeholderTextColor={"#A1A1A1"}
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, emailOrUsername: value })
            }
          />
          <Fontisto
            style={{ position: "absolute", left: 26, top: 17.8 }}
            name="email"
            size={20}
            color={"#A1A1A1"}
          />
          {required && (
            <View style={commonStyles.errorContainer}>
              <Entypo name="cross" size={18} color={"red"} />
            </View>
          )}
          <View style={{ marginTop: 15 }}>
            <TextInput
              style={commonStyles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue=""
              placeholder="*********"
              onChangeText={handlePasswordValidation}
              placeholderTextColor={"#A1A1A1"}
            />
            {required ? (
              <Text style={{ color: "red", fontSize: 12, marginTop: 5 }}>
                {required}
              </Text>
            ) : null}

            <TouchableOpacity
              style={commonStyles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            <SimpleLineIcons
              style={commonStyles.icon2}
              name="lock"
              size={20}
              color={"#A1A1A1"}
            />
          </View>
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text
              style={[
                commonStyles.forgotSection,
                { fontFamily: "Nunito_600SemiBold" },
              ]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 8,
              marginHorizontal: 16,
              backgroundColor: "#2467EC",
              marginTop: 15,
            }}
            onPress={handleSignIn}
          >
            {buttonSpinner ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Sign in
              </Text>
            )}
          </TouchableOpacity>

          <View style={authStyle.socialLoginContainer}>
            <Text style={authStyle.socialLoginText}>Or sign up with</Text>
            <View style={authStyle.socialIconsContainer}>
              <TouchableOpacity style={authStyle.socialIcon}>
                <FontAwesome name="google" size={24} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity style={authStyle.socialIcon}>
                <FontAwesome name="github" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={authStyle.signUpRedirect}>
            <Text style={{ fontSize: 18, fontFamily: "Raleway_600SemiBold" }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Raleway_600SemiBold",
                  color: "#2467EC",
                  marginLeft: 5,
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
