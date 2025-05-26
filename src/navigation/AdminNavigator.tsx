import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AdminStackParamList} from './types';
import {AdminHomeScreen} from '../features/home/screens/AdminScreen';
import {CourseListScreen} from '../features/admin/courses/screens/CourseListScreen';
import {CourseFormScreen} from '../features/admin/courses/components/AddCourseForm';
import {UserListScreen} from '../features/admin/users/screens/UserListScreen';
import {UserFormScreen} from '../features/admin/users/components/AddUserForm';

const Stack = createNativeStackNavigator<AdminStackParamList>();

export const AdminNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
    <Stack.Screen name="CourseManagement" component={CourseListScreen} />
    <Stack.Screen name="CourseForm" component={CourseFormScreen} />
    <Stack.Screen name="UserForm" component={UserFormScreen} />
    <Stack.Screen name="UserManagement" component={UserListScreen} />
  </Stack.Navigator>
);
