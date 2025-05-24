import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Course} from '../../../../types/course';

interface CourseCard {
  course: Course
  onEdit: () => void;
  onDelete: () => void;
}

export const CourseCard = ({course, onEdit, onDelete}: CourseCard) => {
  // console.log('course', course);
  // console.log('onDelete', onDelete);

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.desc}>{course.description}</Text>
        <Text style={styles.price}>{course.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="create-outline" size={24} color="#6200ee" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={{marginLeft: 16}}>
          <Ionicons name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {flex: 1},
  title: {fontSize: 18, fontWeight: '600', marginBottom: 4},
  desc: {color: '#555'},
  price: {color: 'red'},
  actions: {flexDirection: 'row', alignItems: 'center'},
});
