import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authServices} from '../services/authServices';

interface AuthState {
  user: null | any;
  access_token: null | string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
}

const initialState: AuthState = {
  user: null,
  access_token: null,
  status: 'idle',
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
      return rejectWithValue(error.message);
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
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.access_token = action.payload.access_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
