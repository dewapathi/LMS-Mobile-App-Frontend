import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Pressable,
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
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/schemas/signUpSchema";

type SignUpFormData = z.infer<typeof SignUpSchema>;

const ROLE_OPTIONS: { label: string; value: SignUpFormData["role"] }[] = [
  { label: "Admin", value: "admin" },
  { label: "Teacher", value: "teacher" },
  { label: "Student", value: "student" },
];

export default function SignUpScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [showRolePicker, setShowRolePicker] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      role: "student",
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

  const onSubmit = async (data: SignUpFormData) => {
    console.log("Form data:", data);
    // Add your submission logic here
  };

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Image
          style={authStyle.signImage}
          source={require("@/assets/sign-in/signup.png")}
        />
        <Text
          style={[authStyle.welcomeText, { fontFamily: "Raleway_700Bold" }]}
        >
          Let's get started!
        </Text>
        <Text style={authStyle.learningText}>
          Create an account to access all features
        </Text>

        <View style={styles.inputContainer}>
          {/* First Name */}
          <View style={{ marginBottom: 15 }}>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={[commonStyles.input, { paddingLeft: 40 }]}
                    value={value}
                    placeholder="First Name"
                    placeholderTextColor="#A1A1A1"
                    onChangeText={onChange}
                  />
                  {errors.firstName && (
                    <Text style={commonStyles.errorText}>
                      {errors.firstName.message}
                    </Text>
                  )}
                </>
              )}
            />
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="user-o"
              size={18}
              color="#A1A1A1"
            />
          </View>

          {/* Last Name */}
          <View style={{ marginBottom: 15 }}>
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={[commonStyles.input, { paddingLeft: 40 }]}
                    value={value}
                    placeholder="Last Name"
                    placeholderTextColor="#A1A1A1"
                    onChangeText={onChange}
                  />
                  {errors.lastName && (
                    <Text style={commonStyles.errorText}>
                      {errors.lastName.message}
                    </Text>
                  )}
                </>
              )}
            />
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="user-o"
              size={18}
              color="#A1A1A1"
            />
          </View>

          {/* Email */}
          <View style={{ marginBottom: 15 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    style={[commonStyles.input, { paddingLeft: 40 }]}
                    value={value}
                    placeholder="Email"
                    placeholderTextColor="#A1A1A1"
                    onChangeText={onChange}
                    keyboardType="email-address"
                  />
                  {errors.email && (
                    <Text style={commonStyles.errorText}>
                      {errors.email.message}
                    </Text>
                  )}
                </>
              )}
            />
            <Fontisto
              style={{ position: "absolute", left: 24, top: 19 }}
              name="email"
              size={18}
              color="#A1A1A1"
            />
          </View>

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
                    placeholderTextColor="#A1A1A1"
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
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="at"
              size={18}
              color="#A1A1A1"
            />
          </View>

          {/* Password */}
          <View style={{ marginBottom: 15 }}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    secureTextEntry={!isPasswordVisible}
                    style={[commonStyles.input, { paddingLeft: 40 }]}
                    value={value}
                    placeholder="Password"
                    placeholderTextColor="#A1A1A1"
                    onChangeText={onChange}
                  />
                  {errors.password && (
                    <Text style={commonStyles.errorText}>
                      {errors.password.message}
                    </Text>
                  )}
                </>
              )}
            />
            <SimpleLineIcons
              style={{ position: "absolute", left: 24, top: 19 }}
              name="lock"
              size={18}
              color="#A1A1A1"
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 24, top: 17 }}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-off-outline" size={23} color="#747474" />
              ) : (
                <Ionicons name="eye-outline" size={23} color="#747474" />
              )}
            </TouchableOpacity>
          </View>

          {/* Role Selector */}
          <View style={{ marginBottom: 25 }}>
            <Controller
              control={control}
              name="role"
              render={({ field: { value } }) => (
                <>
                  <TouchableOpacity
                    style={[
                      commonStyles.input,
                      {
                        paddingLeft: 40,
                        justifyContent: "center",
                        paddingVertical: 15,
                      },
                    ]}
                    onPress={() => setShowRolePicker(true)}
                  >
                    <Text style={{ color: value ? "#000" : "#A1A1A1" }}>
                      {value || "Select your role"}
                    </Text>
                  </TouchableOpacity>
                  {errors.role && (
                    <Text style={commonStyles.errorText}>
                      {errors.role.message}
                    </Text>
                  )}
                </>
              )}
            />
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="user-circle-o"
              size={18}
              color="#A1A1A1"
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={commonStyles.primaryButton}
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text style={commonStyles.primaryButtonText}>Sign up</Text>
            )}
          </TouchableOpacity>

          {/* Rest of your component remains the same */}
          {/* Social Login Options */}
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

          {/* Sign In Redirect */}
          <View style={authStyle.signUpRedirect}>
            <Text style={authStyle.redirectText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={authStyle.redirectLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Role Picker Modal */}
        <Modal
          visible={showRolePicker}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowRolePicker(false)}
        >
          <View style={commonStyles.modalOverlay}>
            <View style={commonStyles.modalContent}>
              <Text style={commonStyles.modalTitle}>Select Your Role</Text>
              {ROLE_OPTIONS.map((role) => (
                <Pressable
                  key={role.value}
                  style={({ pressed }) => [
                    commonStyles.modalOption,
                    pressed && commonStyles.modalOptionPressed,
                  ]}
                  onPress={() => {
                    setValue("role", role.value);
                    setShowRolePicker(false);
                  }}
                >
                  <Text style={commonStyles.modalOptionText}>{role.label}</Text>
                </Pressable>
              ))}
              <TouchableOpacity
                style={commonStyles.modalCloseButton}
                onPress={() => setShowRolePicker(false)}
              >
                <Text style={commonStyles.modalCloseButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
}
