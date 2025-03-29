import { View, Text, Image } from "react-native";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { bannerData } from "@/constants/constants";
import Swiper from "react-native-swiper";
import { Homestyles } from "@/styles/home/HomeStyle";

export default function HomeBannerSlider() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={Homestyles.container}>
      <Swiper
        dotStyle={Homestyles.dot}
        activeDotStyle={Homestyles.activeDot}
        autoplay={true}
        autoplayTimeout={5}
      >
        {bannerData.map((item: BannerDataTypes, index: number) => (
          <View key={index} style={Homestyles.slide}>
            <Image
              source={item.bannerImageUrl!}
              style={{ width: 400, height: 250 }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
