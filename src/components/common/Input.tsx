import React from 'react';
import {Text, TextInput, StyleProp, TextStyle, StyleSheet} from 'react-native';

import {Controller} from 'react-hook-form';

interface FormInputInterface {
  name: string;
  control?: any;
  rules?: {};
  placeholder: string;
  style?: StyleProp<TextStyle>;
  errors: any;
}

export const FormInput = ({
  name,
  control,
  rules = {},
  placeholder,
  style,
  errors,
  ...rest
}: FormInputInterface) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <TextInput
            style={style}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={name === 'password'}
            {...rest}
          />
          {errors[name] && (
            <Text style={styles.error}>{errors[name].message}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  error: {color: 'red', fontSize: 13, marginBottom: 8},
});
