import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("fetchUserData",async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const ApiSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    error: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending , (state , action) => {
        state.isLoading = true;
        
    });
    builder.addCase(fetchUserData.fulfilled , (state , action) => {
        state.isLoading = false;
        state.data = action.payload;

    });
    builder.addCase(fetchUserData.rejected , (state , action) => {
        console.log("Error" , action.payload);
        state.error = true;

    });
  },
});

export default ApiSlice.reducer;
//  export const { addUser , removeUser , deleteUser} = UserSlice.actions;
