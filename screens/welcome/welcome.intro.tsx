import { View, Text, Image } from "react-native";
import React from "react";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingSwiperData } from "@/constants/constants";
import { router } from "expo-router";
import { commonStyles } from "@/styles/common/common.styles";
import { styles } from "@/styles/onboarding/onboard";

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => {
    return (
      <LinearGradient
        colors={["#E5ECF9", "#F6F7F9", "#E8EEF9"]}
        style={{ flex: 1, paddingHorizontal: 16 }}
      >
        <View style={{ marginTop: 80 }}>
          <Image
            source={item.image}
            style={{ alignSelf: "center", marginBottom: 30 }}
          />
          <Text style={[commonStyles.title, { fontFamily: "Raleway_700Bold" }]}>
            {item.title}
          </Text>
          <View style={{ marginTop: 15 }}>
            <Text
              style={[
                commonStyles.description,
                { fontFamily: "Nunito_400Regular" },
              ]}
            >
              {item.description}
            </Text>
            <Text
              style={[
                commonStyles.description,
                { fontFamily: "Nunito_400Regular" },
              ]}
            >
              {item.sortDescrition}
            </Text>
            <Text
              style={[
                commonStyles.description,
                { fontFamily: "Nunito_400Regular" },
              ]}
            >
              {item.sortDescrition2}
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={onboardingSwiperData}
      onDone={() => {
        router.push("/sign-in");
      }}
      onSkip={() => {
        router.push("/sign-in");
      }}
      renderNextButton={() => (
        <View style={styles.welcomeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.welcomeButtonStyle}>
          <Text
            style={[styles.buttonText, { fontFamily: "Nunito_600SemiBold" }]}
          >
            Done
          </Text>
        </View>
      )}
      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
}
