import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../../../core/store/hook';
import {deleteCourse, fetchCourses} from '../store/courseSlice';
import {CourseCard} from '../components/CourseCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AdminStackParamList} from '../../../../navigation/types';
import {Course} from '../../../../types/course';

export const CourseListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AdminStackParamList>>();
  const dispatch = useAppDispatch();
  const {courses, loading} = useAppSelector(state => state.course);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const confirmDelete = (id: number) => {
    Alert.alert('Confirm Delete', 'Are you sure?', [
      {text: 'Cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => dispatch(deleteCourse(id)),
      },
    ]);
  };

  const renderItem = ({item}: any) => {
    return (
      <CourseCard
        course={item}
        onEdit={() => navigation.navigate('CourseForm', {course: item})}
        onDelete={() => confirmDelete(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" />
      ) : (
        <FlatList
          data={courses.results || []}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 80}}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CourseForm')}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#f9f9f9'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 16},
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#6200ee',
    padding: 18,
    borderRadius: 30,
    elevation: 6,
  },
});
