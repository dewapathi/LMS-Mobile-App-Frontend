import { FieldPath } from "react-hook-form";
import { RegisterFormData } from "../../../schemas";
import { KeyboardTypeOptions } from "react-native";

export const registrationFormfields: {
    name: FieldPath<RegisterFormData>;
    label: string;
    type?: 'text' | 'picker';
    options?: {label: string; value: string}[];
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  }[] = [
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {
      name: 'email',
      label: 'email',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
    {name: 'username', label: 'Username'},
    {name: 'password', label: 'Password', secureTextEntry: true},
    {
      name: 'role',
      label: 'Role',
      type: 'picker',
      options: [
        {label: 'Select Role', value: ''},
        {label: 'Student', value: 'student'},
        {label: 'Teacher', value: 'teacher'},
        {label: 'Admin', value: 'admin'},
      ],
    },
    {name: 'address.street', label: 'Street'},
    {name: 'address.city', label: 'City'},
    {name: 'address.state', label: 'State'},
    {name: 'address.country', label: 'Country'},
    {name: 'address.zipCode', label: 'ZIP Code', keyboardType: 'numeric'},
  ];