import {combineReducers} from '@reduxjs/toolkit';
import authReducer from '../../features/auth/store/authSlice';
import courseReducer from '../../features/admin/courses/store/courseSlice';
import userReducer from '../../features/admin/users/store/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
