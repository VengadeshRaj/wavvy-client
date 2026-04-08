import { createSlice } from '@reduxjs/toolkit';

interface ChatState {
    userName:string,
    password:string
}

const initialState: ChatState = {
    userName:'',
    password:''
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChatInfo: (state,action) => {
      return ({...state,...action.payload})
    },
    reset: () => {
      return initialState
    }
  },
});

export const { addChatInfo, reset } = chatSlice.actions;
export default chatSlice.reducer;