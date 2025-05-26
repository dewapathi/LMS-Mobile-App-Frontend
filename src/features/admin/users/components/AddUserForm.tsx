import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {useAppDispatch, useAppSelector} from '../../../../core/store/hook';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  CreateUserFormValues,
  userCreateSchema,
} from '../../../../schemas/user.schema';
import {FormInput} from '../../../../components/common/Input';
import {createUser} from '../store/userSlice';
import {useNavigation} from '@react-navigation/native';

export const UserFormScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const status = useAppSelector(state => state.user.loading);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateUserFormValues>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      role: '',
    },
  });

  const onSubmit = async (values: CreateUserFormValues) => {
    console.log('values', values);
    try {
      dispatch(createUser(values));
      Alert.alert('Success', 'User created');

      navigation.goBack();
    } catch (error) {
      console.log('8888888888', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Course</Text>

      <FormInput
        name="username"
        control={control}
        placeholder="Username"
        style={styles.input}
        errors={errors}
      />

      <FormInput
        name="password"
        control={control}
        placeholder="Password"
        style={styles.input}
        errors={errors}
      />

      <FormInput
        name="email"
        control={control}
        placeholder="Email"
        style={styles.input}
        errors={errors}
      />

      <FormInput
        name="first_name"
        control={control}
        placeholder="First name"
        style={styles.input}
        errors={errors}
      />

      <FormInput
        name="last_name"
        control={control}
        placeholder="Last name"
        style={styles.input}
        errors={errors}
      />

      <FormInput
        name="role"
        control={control}
        placeholder="Role"
        style={styles.input}
        errors={errors}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        {status ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>{'Create Course'}</Text>
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
