import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {User} from '../../../../types/user';
import {userServices} from '../services/userServices';

interface UserState {
  users: {
    count: number;
    next: string | null;
    previous: string | null;
    results: User[];
  };
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: {count: 0, next: null, previous: null, results: []},
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/get', async () => {
  try {
    const res = await userServices.getAllUsers();
    return res.data;
  } catch (error) {
    console.log('errorerror', error);
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      //Fetch users
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default userSlice.reducer;
