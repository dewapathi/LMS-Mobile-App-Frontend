import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  user: any;
  onEdit: () => void;
  onDelete: () => void;
}

export const UserCard = ({user, onEdit, onDelete}: Props) => {
  // console.log('usercarddddddddddd', user);

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <Text style={styles.name}>
          {user?.first_name} {user?.last_name}
        </Text>
        <Text style={styles.meta}>Username: {user?.username}</Text>
        <Text style={styles.meta}>Email: {user?.email}</Text>
        <Text style={styles.meta}>Role: {user?.role}</Text>
        {/* <Text style={styles.meta}>
          Verified: {user.is_verified ? 'Yes' : 'No'}
        </Text> */}
      </View>
      <TouchableOpacity onPress={onEdit} style={styles.icon}>
        <Ionicons name="create-outline" size={24} color="#6200ee" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete} style={styles.icon}>
        <Ionicons name="trash" size={24} color="#ff5252" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  meta: {
    color: '#555',
    marginTop: 2,
  },
  icon: {
    paddingLeft: 12,
  },
});
