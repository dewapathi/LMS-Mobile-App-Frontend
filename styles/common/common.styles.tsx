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
    height: hp(6.8),
    marginHorizontal: responsiveWidth(4),
    borderRadius: 8,
    paddingLeft: wp(10),
    fontSize: wp(4),
    backgroundColor: "white",
    color: "#000",
    marginBottom: hp(1),
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: responsiveWidth(4),
    position: "absolute",
    top: hp(7.5),
  },
  errorText: {
    color: "red",
    fontSize: wp(3),
    marginTop: hp(0.5),
    marginLeft: wp(4),
  },
  visibleIcon: {
    position: "absolute",
    right: wp(8),
    top: hp(2.5),
  },
  icon2: {
    position: "absolute",
    left: wp(6),
    top: hp(2.5),
  },
  forgotSection: {
    marginHorizontal: responsiveWidth(4),
    textAlign: "right",
    fontSize: wp(4),
    marginTop: hp(-2),
  },
  primaryButton: {
    padding: hp(2),
    borderRadius: 8,
    marginHorizontal: responsiveWidth(4),
    backgroundColor: "#2467EC",
    marginTop: hp(2),
  },
  primaryButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: wp(4.5),
    fontFamily: "Raleway_700Bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: wp(5),
    borderRadius: 10,
    padding: wp(5),
  },
  modalTitle: {
    fontSize: wp(5),
    fontFamily: "Raleway_700Bold",
    marginBottom: hp(2),
    textAlign: 'center',
  },
  modalOption: {
    padding: hp(1.8),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalOptionPressed: {
    backgroundColor: '#f5f5f5',
  },
  modalOptionSelected: {
    backgroundColor: '#E5ECF9',
  },
  modalOptionText: {
    fontSize: wp(4),
  },
  modalCloseButton: {
    marginTop: hp(2),
    padding: hp(1),
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#2467EC',
    fontSize: wp(4.2),
  },
});
