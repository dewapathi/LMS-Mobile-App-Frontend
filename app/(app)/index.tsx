import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import HomeBannerSlider from "@/components/home/HomeBannerSlider";
import SearchInput from "@/components/common/SearchInput";
import AllCourses from "@/components/course/Course";

export default function Home() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 50 }}
    >
      <SearchInput />
      {/* <ScrollView> */}
      <HomeBannerSlider />
      <AllCourses />
      {/* </ScrollView> */}
    </LinearGradient>
  );
}
