import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
   token: '',
   isAuthenticated: false,
   authenticate: (token) => {},
   logout: () => {},
});

function AuthContextProvider({ children }) {
   const [authToken, setAuthToken] = useState();

   // Should be triggered whenever a user did login or sign up successfully
   function authenticate(token) {
      setAuthToken(token);
      // The first argument is the key
      // Second the value that we wanna store (must be a string)
      AsyncStorage.setItem('token', token);
   }
   function logout() {
      setAuthToken(null);
      AsyncStorage.removeItem('token');
   }

   const value = {
      token: authToken,
      isAuthenticated: !!authToken,
      authenticate: authenticate,
      logout: logout,
   };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
