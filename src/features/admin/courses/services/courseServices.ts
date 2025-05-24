import api from '../../../../core/api/axios';
import {CourseFormValues} from '../../../../schemas/course.schema';

export const courseServices = {
  getAllCourses: async () => {
    const courses = await api.get('course/');    
    return courses.data;
  },
  addCourse: async (data: CourseFormValues) => {
    const res = await api.post('course/', data);
    return res.data;
  },
  updateCourse: async (id: number, data: CourseFormValues) => {
    const res = await api.put(`course/${id}/`, data);
    return res.data;
  },
  deleteCourse: async (id: number) => {
    await api.delete(`course/${id}/`);
    return id;
  },
};
