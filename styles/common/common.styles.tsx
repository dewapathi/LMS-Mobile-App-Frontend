import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const commonStyles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  buttonContainer: {
    backgroundColor: "#2467EC",
    width: responsiveWidth(88),
    height: responsiveHeight(3),
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  dotStyle: {
    backgroundColor: "#C6C7CC",
    width: responsiveWidth(2.5),
    height: responsiveHeight(1.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: "#2467EC",
    width: responsiveWidth(2.5),
    height: responsiveHeight(1.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    textAlign: "center",
    fontSize: hp("3.5%"),
  },
  description: {
    fontSize: hp("2.5%"),
    color: "#575757",
    textAlign: "center",
  },
  input: {
    height: 55,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "white",
    color: "red",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    position: "absolute",
    top: 60,
  },
  visibleIcon: {
    position: "absolute",
    right: 30,
    top: 15,
  },
  icon2: {
    position: "absolute",
    left: 24,
    top: 17.8,
    marginTop: -2,
  },
  forgotSection: {
    marginHorizontal: 16,
    textAlign: "right",
    fontSize: 16,
    marginTop: -20,
  },
});
