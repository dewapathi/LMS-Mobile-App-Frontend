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
  View,
  KeyboardTypeOptions,
} from 'react-native';
import {Controller, FieldPath, get, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RegisterFormData, registerSchema} from '../../../schemas';
import {Picker} from '@react-native-picker/picker';
import {useAppDispatch, useAppSelector} from '../../../core/store/hook';
import {registration, resetRegisterStatus} from '../store/authSlice';
import { registrationFormfields } from '../config/registerField';

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
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: RegisterFormData) => {
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

      {registrationFormfields.map(
        ({name, label, keyboardType, secureTextEntry, type, options}) => (
          <Controller
            key={name}
            control={control}
            name={name}
            render={({field: {onChange, value}}) => {
              const errorMessage = get(errors, name)?.message;

              return (
                <View style={{marginBottom: 12}}>
                  {type === 'picker' ? (
                    <View style={styles.pickerWrapper}>
                      <Picker
                        selectedValue={value}
                        onValueChange={onChange}
                        style={styles.picker}>
                        {options?.map(option => (
                          <Picker.Item
                            key={option.value}
                            label={option.label}
                            value={option.value}
                          />
                        ))}
                      </Picker>
                    </View>
                  ) : (
                    <TextInput
                      style={styles.input}
                      placeholder={label}
                      value={value?.toString() ?? ''}
                      onChangeText={onChange}
                      keyboardType={keyboardType}
                      secureTextEntry={secureTextEntry}
                      autoCapitalize={name === 'email' ? 'none' : undefined}
                    />
                  )}
                  {errorMessage && (
                    <Text style={styles.error}>{errorMessage}</Text>
                  )}
                </View>
              );
            }}
          />
        ),
      )}

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
    // alignItems: 'center',
  },
  logo: {
    width: 360,
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
  input: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  pickerWrapper: {
    width: '100%',
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    marginLeft: 8,
    // height: 48,
    paddingHorizontal: 16,
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
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 4,
  },
});
