import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {User} from '../../../../types/user';
import {userServices} from '../services/userServices';
import {CreateUserFormValues} from '../../../../schemas/user.schema';

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

export const createUser = createAsyncThunk(
  'users/create',
  async (data: CreateUserFormValues) => {
    try {
      const res = await userServices.createUser(data);
      console.log('2222222222222222', res);

      return res.data;
    } catch (error: any) {
      console.log('errorerror', error.message);
    }
  },
);

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
      })

      //Create course
      .addCase(createUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.results.unshift(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
