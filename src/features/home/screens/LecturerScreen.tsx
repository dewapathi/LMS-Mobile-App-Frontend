import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { MainTabParamList } from '../../../navigation/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export const LecturerScreen = () => {
  const navigation = useNavigation<BottomTabNavigationProp<MainTabParamList>>();

  const goToProfile = () => {
    navigation.navigate('Profile')
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greeting}>Hi, Welcome 👋</Text>

      <Text style={styles.title}>Lecturer </Text>

      <Image
        source={require('../../../assets/images/lms11.jpg')}
        style={styles.image}
      />

      <Text style={styles.subtitle}>
        Start exploring top courses and master new skills
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start Learning</Text>
      </TouchableOpacity>

      <Text style={styles.sectionHeading}>📚 Featured Courses</Text>

      <TouchableOpacity style={styles.profileButton} onPress={goToProfile}>
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
      {/* Later: FlatList of courses here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f5f7fb',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  profileButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    padding: 8,
  },
  profileButtonText: {
    color: '#6200ee',
    fontWeight: '600',
  },
});
