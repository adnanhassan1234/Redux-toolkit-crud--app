import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = 'https://643e4289c72fda4a0bf15e0d.mockapi.io/crud';

// create a user data
export const createUser = createAsyncThunk("createUser", async (data) => {
    try {
      const response = await axios.post(API_ENDPOINT, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  });

  //  read a user all data
  export const showUser = createAsyncThunk("showUser", async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error;
    }
});


  //  delete a user all data
export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
    try {
      await axios.delete(`${API_ENDPOINT}/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  });
  

const userDetailsSlice = createSlice({
  name: "usersDetails",
  initialState: {
    users: [],
    isLoading: false,
    error: false,
  },
  reducers: {},
 
  // create a user data by POST method
  extraReducers: (builder) => {
    builder.addCase(createUser.pending , (state , action) => {
        state.isLoading = true;
        
    });
    builder.addCase(createUser.fulfilled , (state , action) => {
        state.isLoading = false;
        state.users.push(action.payload);

    });
    builder.addCase(createUser.rejected , (state , action) => {
        console.log("Error" , action.payload);
        state.error = true;

    });

    //  read a user all data by get method
        builder.addCase(showUser.pending , (state , action) => {
        state.isLoading = true;
        
    });
    builder.addCase(showUser.fulfilled , (state , action) => {
        state.isLoading = false;
        state.users = action.payload;

    });
    builder.addCase(showUser.rejected , (state , action) => {
        console.log("Error" , action.payload);
        state.error = action.payload.message;

    });
    //  delete a user data by single
        builder.addCase(deleteUser.pending , (state , action) => {
        state.isLoading = true;
        
    });
    builder.addCase(deleteUser.fulfilled , (state , action) => {
        state.isLoading = false;
       // remove the deleted user from the users array
        state.users = state.users.filter(user => user.id !== action.payload);

    });
    builder.addCase(deleteUser.rejected , (state , action) => {
        console.log("Error" , action.payload);
        state.error = action.payload.message;

    });
  },
});

export default userDetailsSlice.reducer;
