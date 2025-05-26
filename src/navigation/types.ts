import {NavigatorScreenParams} from '@react-navigation/native';
import { Course } from '../types/course';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Course: undefined;
  Profile: undefined;
};

export type AdminStackParamList = {
  AdminHome: undefined;
  CourseManagement: undefined;
  UserManagement: undefined;
  ParamReports: undefined;
  CourseForm?: { course?: Course };
  UserForm?: { user?: Course };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
