import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import CourseCard from "../cards/CourseCard";

export default function AllCourses() {
  const flatListRef = useRef(null);
  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "React Native for Beginners",
      thumbnail: {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&h=200&q=80",
      },
      ratings: 4.5,
      purchased: 120,
      price: 19.99,
      estimatedPrice: 59.99,
      courseData: Array(12).fill({}),
    },
    {
      id: "2",
      name: "Django for Beginners",
      thumbnail: {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&h=200&q=80",
      },
      ratings: 4.5,
      purchased: 120,
      price: 190.99,
      estimatedPrice: 39.99,
      courseData: Array(10).fill({}),
    },
  ]);

  return (
    <View style={{ flex: 1, marginHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#000000",
            fontFamily: "Raleway_700Bold",
          }}
        >
          Pupular courses
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,
              color: "#2467EC",
              fontFamily: "Nunito_600SemiBold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        data={courses}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard item={item} />}
      />
    </View>
  );
}
