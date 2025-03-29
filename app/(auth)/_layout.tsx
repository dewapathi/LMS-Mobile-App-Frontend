import { AuthHeader } from "@/components/navigation";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <AuthHeader />,
        headerShown: true,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="onboarding"
        options={{
          headerShown: false, // Hide header for onboarding
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: "Create Account",
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: "Reset Password",
        }}
      />
    </Stack>
  );
}
