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

// Define role options
const ROLE_OPTIONS = [
  { label: "Admin", value: "admin" },
  { label: "Teacher", value: "teacher" },
  { label: "Student", value: "student" },
];

export default function SignUpScreen() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [showRolePicker, setShowRolePicker] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    role: "",
  });

  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const validateField = (field: string, value: string) => {
    let error = "";

    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) error = "This field is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "username":
        if (!value.trim()) error = "Username is required";
        break;
      case "password":
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
        const hasMinimumLength = value.length >= 6;

        if (!hasMinimumLength) {
          error = "Password must be at least 6 characters long";
        } else if (!hasNumber) {
          error = "Password must contain at least one number";
        } else if (!hasSpecialChar) {
          error = "Password must contain at least one special character";
        }
        break;
      case "role":
        if (!value) error = "Please select a role";
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return !error;
  };

  const handleInputChange = (field: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));

    // Validate on change (or you can validate only on submit)
    if (errors[field as keyof typeof errors]) {
      validateField(field, value);
    }
  };

  const handleSubmit = () => {
    // Validate all fields
    const isFirstNameValid = validateField("firstName", userInfo.firstName);
    const isLastNameValid = validateField("lastName", userInfo.lastName);
    const isEmailValid = validateField("email", userInfo.email);
    const isUsernameValid = validateField("username", userInfo.username);
    const isPasswordValid = validateField("password", userInfo.password);
    const isRoleValid = validateField("role", userInfo.role);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isUsernameValid &&
      isPasswordValid &&
      isRoleValid
    ) {
      setButtonSpinner(true);
      // Handle form submission
      console.log("Form submitted:", userInfo);
      // Your API call would go here
      setButtonSpinner(false);
    }
  };

  const selectRole = (role: string) => {
    handleInputChange("role", role);
    setShowRolePicker(false);
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
            <TextInput
              style={[commonStyles.input, { paddingLeft: 40 }]}
              value={userInfo.firstName}
              placeholder="First Name"
              placeholderTextColor={"#A1A1A1"}
              onChangeText={(value) => handleInputChange("firstName", value)}
              onBlur={() => validateField("firstName", userInfo.firstName)}
            />
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="user-o"
              size={18}
              color={"#A1A1A1"}
            />
            {errors.firstName ? (
              <Text style={commonStyles.errorText}>{errors.firstName}</Text>
            ) : null}
          </View>

          {/* Last Name */}
          <View style={{ marginBottom: 15 }}>
            <TextInput
              style={[commonStyles.input, { paddingLeft: 40 }]}
              value={userInfo.lastName}
              placeholder="Last Name"
              placeholderTextColor={"#A1A1A1"}
              onChangeText={(value) => handleInputChange("lastName", value)}
              onBlur={() => validateField("lastName", userInfo.lastName)}
            />
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="user-o"
              size={18}
              color={"#A1A1A1"}
            />
            {errors.lastName ? (
              <Text style={commonStyles.errorText}>{errors.lastName}</Text>
            ) : null}
          </View>

          {/* Email */}
          <View style={{ marginBottom: 15 }}>
            <TextInput
              style={[commonStyles.input, { paddingLeft: 40 }]}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="Email"
              placeholderTextColor={"#A1A1A1"}
              onChangeText={(value) => handleInputChange("email", value)}
              onBlur={() => validateField("email", userInfo.email)}
            />
            <Fontisto
              style={{ position: "absolute", left: 24, top: 19 }}
              name="email"
              size={18}
              color={"#A1A1A1"}
            />
            {errors.email ? (
              <Text style={commonStyles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          {/* Username */}
          <View style={{ marginBottom: 15 }}>
            <TextInput
              style={[commonStyles.input, { paddingLeft: 40 }]}
              value={userInfo.username}
              placeholder="Username"
              placeholderTextColor={"#A1A1A1"}
              onChangeText={(value) => handleInputChange("username", value)}
              onBlur={() => validateField("username", userInfo.username)}
            />
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="at"
              size={18}
              color={"#A1A1A1"}
            />
            {errors.username ? (
              <Text style={commonStyles.errorText}>{errors.username}</Text>
            ) : null}
          </View>

          {/* Password */}
          <View style={{ marginBottom: 15 }}>
            <TextInput
              style={[commonStyles.input, { paddingLeft: 40 }]}
              secureTextEntry={!isPasswordVisible}
              value={userInfo.password}
              placeholder="Password"
              onChangeText={(value) => handleInputChange("password", value)}
              onBlur={() => validateField("password", userInfo.password)}
              placeholderTextColor={"#A1A1A1"}
            />
            <SimpleLineIcons
              style={{ position: "absolute", left: 24, top: 19 }}
              name="lock"
              size={18}
              color={"#A1A1A1"}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 24, top: 17 }}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons name="eye-off-outline" size={23} color={"#747474"} />
              ) : (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            {errors.password ? (
              <Text style={commonStyles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          {/* Role Selector */}
          <View style={{ marginBottom: 25 }}>
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
              <Text style={{ color: userInfo.role ? "#000" : "#A1A1A1" }}>
                {userInfo.role
                  ? ROLE_OPTIONS.find((r) => r.value === userInfo.role)?.label
                  : "Select your role"}
              </Text>
            </TouchableOpacity>
            <FontAwesome
              style={{ position: "absolute", left: 24, top: 19 }}
              name="user-circle-o"
              size={18}
              color={"#A1A1A1"}
            />
            {errors.role ? (
              <Text style={commonStyles.errorText}>{errors.role}</Text>
            ) : null}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={commonStyles.primaryButton}
            onPress={handleSubmit}
            disabled={buttonSpinner}
          >
            {buttonSpinner ? (
              <ActivityIndicator size={"small"} color={"white"} />
            ) : (
              <Text style={commonStyles.primaryButtonText}>Sign up</Text>
            )}
          </TouchableOpacity>

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
                    userInfo.role === role.value &&
                      commonStyles.modalOptionSelected,
                  ]}
                  onPress={() => selectRole(role.value)}
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
