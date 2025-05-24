import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { AdminStackParamList } from '../../../navigation/types';

type AdminHomeScreenNavigationProp = StackNavigationProp<
  AdminStackParamList,
  'AdminHome'
>;

export const AdminHomeScreen = () => {
  const navigation = useNavigation<AdminHomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('CourseManagement')}
      >
        <Text>Manage Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('UserManagement')}
      >
        <Text>Manage Users</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.card}
        // onPress={() => navigation.navigate('PaymentReports')}
      >
        <Text>View Payment Reports</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
});