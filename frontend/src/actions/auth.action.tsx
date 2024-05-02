
// actions/authActions.ts
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import RootState  from '../reducers'; // RootState est le type de l'état global de votre application
import axios from 'axios';

// Définition des types d'actions
interface LoginSuccessAction {
  type: 'LOGIN_SUCCESS';
  payload: any; // Définissez le type de votre charge utile
}

interface LoginFailureAction {
  type: 'LOGIN_FAILURE';
  payload: string; // Définissez le type de votre message d'erreur
}

interface LogoutAction {
  type: 'LOGOUT';
}

// Définition du type de toutes les actions d'authentification
type AuthActionTypes = LoginSuccessAction | LoginFailureAction | LogoutAction;

// Définition de l'action asynchrone de connexion avec Thunk
export const login = (email: string, password: string): ThunkAction<void, typeof RootState, unknown, AuthActionTypes> => {
  return async (dispatch: Dispatch<AuthActionTypes>) => {
    try {
      const response = await axios.post("http://localhost:3001/user/login", { email, password });
      if (response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailure("Authentification échouée"));
      }
    } catch (error : any) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const logout = (): LogoutAction => {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
};

const loginSuccess = (userData: any): LoginSuccessAction => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};

const loginFailure = (error: string): LoginFailureAction => {
  return {
    type: "LOGIN_FAILURE",
    payload: error,
  };
};