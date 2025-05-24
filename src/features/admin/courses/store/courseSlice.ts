import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Course} from '../../../../types/course';
import {courseServices} from '../services/courseServices';
import {CourseFormValues} from '../../../../schemas/course.schema';

interface CourseState {
  courses: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Course[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: {count: 0, next: null, previous: null, results: []},
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk('courses/get', async () => {
  try {
    return await courseServices.getAllCourses();
  } catch (error) {
    console.log('error', error);
  }
});

export const createCourse = createAsyncThunk(
  'courses/create',
  async (data: CourseFormValues, {rejectWithValue}) => {
    try {
      return await courseServices.addCourse(data);
    } catch (error: any) {
      console.log('error', error);
      return rejectWithValue(
        error.response?.data?.error?.message || 'Registration failed',
      );
    }
  },
);

export const updateCourse = createAsyncThunk(
  'course/update',
  async (payload: {id: number; data: CourseFormValues}, {rejectWithValue}) => {
    try {
      const response = await courseServices.updateCourse(
        payload.id,
        payload.data,
      );
      console.log('response', response);
      return response;
    } catch (error: any) {
      console.log('error', error);
      return rejectWithValue(
        error.response?.data?.error?.message || 'Registration failed',
      );
    }
  },
);

export const deleteCourse = createAsyncThunk(
  'course/delete',
  async (id: number) => {
    try {
      return await courseServices.deleteCourse(id);
    } catch (error) {
      console.log('error', error);
    }
  },
);

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //Fecth courses
      .addCase(fetchCourses.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      })

      //Created course
      .addCase(createCourse.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.results.unshift(action.payload);
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //Update course
      .addCase(updateCourse.fulfilled, (state, action) => {
        const index = state.courses.results.findIndex(
          c => c.id === action.payload.id,
        );
        if (index !== -1) {
          state.courses.results[index] = action.payload;
        }
      })

      //Delete course
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses.results = state.courses.results.filter(
          c => c.id !== action.payload,
        );
      });
  },
});

export default courseSlice.reducer;
