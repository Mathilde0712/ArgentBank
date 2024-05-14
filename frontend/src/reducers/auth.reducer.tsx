// import { AUTH_POST } from "../actions/auth.action";

// reducers/authReducer.js
const initialState = {
  user: {
    "email": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "userName": "",
    "token" :"",
  },
  isAuthenticated: false,
};

export default function authReducer(state = initialState,action : any){
  switch (action.type) {
    case AUTH_POST:
  return {...state,
    "email": action.payload.email,
    "password":action.payload.password,
    "firstName": action.payload.firstName,
    "lastName": action.payload.lastName,
    "userName": action.payload.userName,
    "token" :action.payload.token,
    isAuthenticated : true,
}
  

  default:
    return {...state};
}
}