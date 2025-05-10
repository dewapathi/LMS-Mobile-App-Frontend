import React, {useEffect} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RegisterFormData, registerSchema} from '../../../schemas';
import {Picker} from '@react-native-picker/picker';
import {useAppDispatch, useAppSelector} from '../../../core/store/hook';
import {registration, resetRegisterStatus} from '../store/authSlice';

export const RegisterScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.auth.registerStatus);

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: {errors},
    watch,
  } = useForm<RegisterFormData>({resolver: zodResolver(registerSchema)});

  const onSubmit = async (data: RegisterFormData) => {
    console.log('RegisterFormData', data);
    try {
      await dispatch(registration(data)).unwrap();
      Alert.alert(
        'Registration Successful',
        'Please verify your account. A confirmation email has been sent.',
        [{text: 'OK', onPress: () => navigation.navigate('Login')}],
      );
    } catch (error: any) {
      Alert.alert('Registration Failed', error);
    }
  };

  useEffect(() => {
    if (status === 'succeeded') {
      navigation.navigate('Login');
      dispatch(resetRegisterStatus());
    }
  }, [status]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/lms6.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={text => setValue('firstName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={text => setValue('lastName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setValue('username', text)}
      />
      {errors.username && <Text>{errors.username.message}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={text => setValue('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setValue('password', text)}
      />
      <Controller
        control={control}
        name="role"
        render={({field: {onChange, value}}) => (
          <Picker
            selectedValue={value}
            onValueChange={itemValue => onChange(itemValue)}
            style={{height: 50, width: '100%'}}>
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Teacher" value="teacher" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>
        )}
      />

      <Text style={styles.sectionTitle}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Street"
        onChangeText={text => setValue('address.street', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={text => setValue('address.city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        onChangeText={text => setValue('address.state', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        onChangeText={text => setValue('address.country', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        keyboardType="numeric"
        onChangeText={text => setValue('address.zipCode', text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        disabled={status === 'loading'}>
        {status === 'loading' ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Register</Text>
        )}
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Login' as never)}>
        Already have an account? <Text style={styles.linkBold}>Login</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
    alignItems: 'center',
  },
  logo: {
    width: 2000,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6200ee',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    fontSize: 14,
    color: '#444',
  },
  linkBold: {
    color: '#6200ee',
    fontWeight: 'bold',
  },
});
