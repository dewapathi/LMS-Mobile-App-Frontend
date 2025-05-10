import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authServices} from '../services/authServices';
import {RegisterFormData} from '../../../schemas';

interface AuthState {
  user: null | any;
  access_token: null | string;
  loginStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  registerStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
}

const initialState: AuthState = {
  user: null,
  access_token: null,
  loginStatus: 'idle',
  registerStatus: 'idle',
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (
    credintials: {username: string; password: string},
    {rejectWithValue},
  ) => {
    try {
      return await authServices.login(credintials);
    } catch (error: any) {
      console.log('API error response:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error?.message || 'Login failed');
    }
  },
);

export const registration = createAsyncThunk(
  'auth/register',
  async (data: RegisterFormData, {rejectWithValue}) => {
    try {
      const response = await authServices.register(data);
      console.log('responseresponse', response);

      return response;
    } catch (error: any) {
      console.log('API error response:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error?.message || 'Registration failed');
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.access_token = null;
    },
    resetRegisterStatus: state => {
      state.registerStatus = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      //Handle login state
      .addCase(login.pending, state => {
        state.loginStatus = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = 'failed';
        state.error = action.payload as string;
      })

      //Handle register state
      .addCase(registration.pending, state => {
        state.registerStatus = 'loading';
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.registerStatus = 'succeeded';
        // state.user = action.payload.user;
        // state.access_token = action.payload.access_token;
      })
      .addCase(registration.rejected, (state, action) => {
        state.registerStatus = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {logout, resetRegisterStatus} = authSlice.actions;
export default authSlice.reducer;
