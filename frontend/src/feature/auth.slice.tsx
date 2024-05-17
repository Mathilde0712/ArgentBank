import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface UserData {
    email: string;
    password: string;
  }
    
export const register = createAsyncThunk("auth/register", async(userData: UserData, thunkAPI)=>{
    try{
const response = await axios.post("http://localhost:3001/api/v1/user/login", {user : userData});
return response.data.user;
    } catch (err) {
return thunkAPI.rejectWithValue(err.response.data.errors)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: undefined,
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        }).addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
    
    }).addCase(register.rejected, (state) => {
        state.isLoading = false;
       
    })
}});


export default authSlice.reducer;
