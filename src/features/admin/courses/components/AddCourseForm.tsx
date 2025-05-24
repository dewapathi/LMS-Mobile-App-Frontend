import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CourseFormValues,
  courseSchema,
} from '../../../../schemas/course.schema';
import {useAppDispatch, useAppSelector} from '../../../../core/store/hook';
import {createCourse, updateCourse} from '../store/courseSlice';

export const CourseFormScreen = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<any>();
  const navigation = useNavigation();

  const isEdit = !!route.params?.course;
  const course = route.params?.course;

  const status = useAppSelector(state => state.course.loading);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: course?.title || '',
      description: course?.description || '',
      price: course?.price || '',
    },
  });

  const onSubmit = async (values: CourseFormValues) => {
    try {
      if (isEdit) {
        await dispatch(updateCourse({id: course.id, data: values}));
        Alert.alert('Success', 'Course updated');
      } else {
        await dispatch(createCourse(values));
        Alert.alert('Success', 'Course created');
      }

      navigation.goBack();
    } catch (error: any) {
      Alert.alert('Error', error?.message || 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEdit ? 'Edit Course' : 'New Course'}</Text>

      <Controller
        control={control}
        name="title"
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Course Title"
              value={value}
              onChangeText={onChange}
            />
            {errors.title && (
              <Text style={styles.error}>{errors.title.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              style={[styles.input, {height: 100}]}
              placeholder="Course Description"
              multiline
              value={value}
              onChangeText={onChange}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="price"
        render={({field: {onChange, value}}) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Price"
              value={value}
              onChangeText={onChange}
            />
            {errors.price && (
              <Text style={styles.error}>{errors.price.message}</Text>
            )}
          </>
        )}
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        {status ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            {isEdit ? 'Update' : 'Create'} Course
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 24, backgroundColor: '#fff'},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 24},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f8f8f8',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {color: '#fff', fontWeight: 'bold', textAlign: 'center'},
  error: {color: 'red', fontSize: 13, marginBottom: 8},
});
