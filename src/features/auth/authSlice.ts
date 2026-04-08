import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    userName:string,
    password:string
}

const initialState: AuthState = {
    userName:'',
    password:''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAuthInfo: (state,action) => {
      return ({...state,...action.payload})
    },
    reset: () => {
      return initialState
    }
  },
});

export const { addAuthInfo, reset } = authSlice.actions;
export default authSlice.reducer;