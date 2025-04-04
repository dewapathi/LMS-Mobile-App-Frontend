import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { authStyle } from "@/styles/auth/authStyle";
import { TextInput } from "react-native-gesture-handler";
import { commonStyles } from "@/styles/common/commonStyles";
import { styles } from "@/styles/onboarding/onboard";
import { router } from "expo-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/schemas/signUpSchema";
import { Controller, useForm } from "react-hook-form";
import { authApi } from "@/api/auth/authApi";

type SignInFormData = z.infer<typeof SignInSchema>;

export default function SignInScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleSignIn = async (data: SignInFormData) => {
    try {
      await authApi.signIn(data);

      Alert.alert("Success", "Login Successful!", [
        { text: "OK", onPress: () => router.push("/(app)") },
      ]);
    } catch (error: any) {
      let errorMessage = "Failed to login!";

      if (error?.details?.error?.message) {
        errorMessage = error.details.error.message;
      }

      Alert.alert("Error", errorMessage);
    }
  };

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
          {/* Username */}
          <View style={{ marginBottom: 15 }}>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={[commonStyles.input, { paddingLeft: 40 }]}
                    value={value}
                    placeholder="Username"
                    placeholderTextColor={"#A1A1A1"}
                    onChangeText={onChange}
                  />
                  {errors.username && (
                    <Text style={commonStyles.errorText}>
                      {errors.username.message}
                    </Text>
                  )}
                </>
              )}
            />
          </View>
          <Fontisto
            style={{ position: "absolute", left: 26, top: 17.8 }}
            name="email"
            size={20}
            color={"#A1A1A1"}
          />

          {/* Password */}
          <View style={{ marginTop: 5 }}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={commonStyles.input}
                    secureTextEntry={!isPasswordVisible}
                    defaultValue=""
                    placeholder="**********"
                    placeholderTextColor={"#A1A1A1"}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.password && (
                    <Text style={commonStyles.errorText}>
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />

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
            onPress={handleSubmit(handleSignIn)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
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
