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
      console.error("Erreur lors de la requête de connexion");
    }
  } catch (error) {
    console.error(error);
  }
};

export const userData = async (token: string, dispatch: AppDispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(setUser(data.body));
      dispatch(setUsername(data.body.userName));
    } else {
      console.error("Erreur lors de la requête de profil");
    }
  } catch (error) {
    console.error("Erreur lors de la requête:", error);
  }
};

export const editUsername = async (token: string, newUsername : string, dispatch : AppDispatch) => {
  try {
    
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUsername }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUsername(data.body.userName));
    } else {
      alert("Erreur dans la modification de l'username");
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
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setUsername: (state, action) => {
      state.user.userName = action.payload;
    },

    logout: (state) => {
      state.token = null;
      state.user = { ...state.user };
    },
  },
});

export const { getToken, logout, setUser, setUsername } = authSlice.actions;
export default authSlice.reducer;
