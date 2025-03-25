import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const authStyle = StyleSheet.create({
  signImage: {
    width: responsiveWidth(60),
    height: responsiveHeight(25),
    alignSelf: "center",
    marginTop: responsiveHeight(5),
  },
  welcomeText: {
    textAlign: "center",
    fontSize: wp(6),
    marginTop: hp(2),
  },
  learningText: {
    textAlign: "center",
    color: "#575757",
    fontSize: wp(3.8),
    marginTop: hp(0.5),
    marginBottom: hp(2),
  },
  signUpRedirect: {
    flexDirection: "row",
    marginHorizontal: responsiveWidth(4),
    justifyContent: "center",
    marginBottom: hp(3),
    marginTop: hp(2),
  },
  socialLoginContainer: {
    marginTop: hp(4),
    alignItems: 'center',
  },
  socialLoginText: {
    fontSize: wp(4),
    color: '#666',
    marginBottom: hp(2),
  },
  socialIconsContainer: {
    flexDirection: 'row',
    gap: wp(8),
  },
  socialIcon: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  redirectText: {
    fontSize: wp(4),
    fontFamily: "Raleway_600SemiBold",
  },
  redirectLink: {
    fontSize: wp(4),
    fontFamily: "Raleway_600SemiBold",
    color: "#2467EC",
    marginLeft: wp(1),
  },
  inputContainer: {
    marginTop: hp(1),
  },
});
