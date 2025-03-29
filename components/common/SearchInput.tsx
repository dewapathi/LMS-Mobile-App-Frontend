import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { SearchInputStyles } from "@/styles/search/SearchInputStyle";
import { AntDesign } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <View>
      <View style={SearchInputStyles.filteringContainer}>
        <View style={SearchInputStyles.searchContainer}>
          <TextInput
            style={[SearchInputStyles.input, { fontFamily: "Nunito_700Bold" }]}
            placeholder="Search"
            value={""}
            onChangeText={() => {}}
            placeholderTextColor={"#C67cc"}
          />
          <TouchableOpacity style={SearchInputStyles.searchIconContainer}>
            <AntDesign name="search1" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <FlatList
          data={[]}
        //   keyExtractor
          renderItem={({item}) => (
            <Text>Search data</Text>
          )}
        />
      </View>
    </View>
  );
}
