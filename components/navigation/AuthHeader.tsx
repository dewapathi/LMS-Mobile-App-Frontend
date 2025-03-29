import { authStyle } from "@/styles/auth";
import { View, Text, StyleSheet } from "react-native";

export const AuthHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Raleway_700Bold" }}>My Learning App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2467EC",
    alignContent: "center",
    justifyContent: "center",
  },
});
