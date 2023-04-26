import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = "https://api.gowild.appscorridor.com/api/v1/auth/login";



export const loginUser = createAsyncThunk("loginUser", async (data) => {
  try {
    const response = await axios.post(API_ENDPOINT, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('accessToken'),
      },
    });
    return response.data;
  } catch (error) {
    console.log("🚀 ~ file: LoginSlice.js:18 ~ loginUser ~ error:", error)
    throw error;
  }
});

// remove token when click on logout button
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  dispatch(LoginSlice.actions.addToken(""));
};

const LoginSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    accessToken: "",
    isLoading: false,
  },

  reducers: {
    addToken:(state , action) => {
        state.accessToken = localStorage.getItem('accessToken');
    },
    addUser:(state , action) => {
        state.user = localStorage.getItem('user');
    },
    
  },
  
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },

    [loginUser.fulfilled]: (state, {payload:{user ,accessToken}}) => {
      state.isLoading = false;
      state.accessToken = accessToken;
      state.user = user;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("user", JSON.stringify(accessToken));
    },

    [loginUser.rejected]: (state, action) => {
      console.log("Error", action.payload);
      state.error = true;
    },
  },
});

export const { addToken , addUser } = LoginSlice.actions;

export default LoginSlice.reducer;
