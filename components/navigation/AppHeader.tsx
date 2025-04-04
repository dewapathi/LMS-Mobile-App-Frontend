import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useAuth } from '@/contexts/AuthContext';

export const AppHeader = () => {
  // const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {"user?.name"}</Text>
      <TouchableOpacity>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#2467EC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  logoutText: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
