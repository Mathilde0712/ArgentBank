import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../app/store";

export const login = async (
  email: string,
  password: string,
  dispatch: AppDispatch,
  navigate: any
) => {
  const data = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      const token = responseData.body.token;
      sessionStorage.setItem("token", token);
      console.log(token);
      dispatch(getToken(token));
      navigate("/user");
    } else {
        alert("Erreur dans l’identifiant ou le mot de passe");
        console.error("Erreur lors de la requête de connexion:");
      }
  } catch (error) {
    console.error(error);
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: {
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
    },
  },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },

    logout: (state) => {
      state.token = null;
      state.user = { ...state.user };
    },
  },
});

export const { getToken, logout } = authSlice.actions;
export default authSlice.reducer;
