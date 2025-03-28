import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [loaded]);

  if (!loaded) {
    // Use a placeholder screen instead of `return null`
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Text> </Text>
      {/* Wrap everything in GestureHandlerRootView */}
      <RootLayoutNav />
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const [isLogging, setIsLogging] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        {isLogging ? (
          <Text>Logging...</Text>
        ) : (
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="/welcome-intro/index" />
            <Stack.Screen name="/sign-in/index" />
            <Stack.Screen name="/sign-up/index" />
            <Stack.Screen name="/forgot-password/index" />
          </Stack>
        )}
      </View>
    </ThemeProvider>
  );
}
