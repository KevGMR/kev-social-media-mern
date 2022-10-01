import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   user: null,
//   isFetching: false,
//   error: false,
// };

const INITIAL_STATE = {
  user: {
    _id: "63302eaafbe23b2b9f5bb2dc",
    username: "kevin",
    email: "kevin@gmail.com",
    profilePicture: "person/1.jpeg",
    followers: [],
    followings: ["62c0653cdc9ab8bf10736058"],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
