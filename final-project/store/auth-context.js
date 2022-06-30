import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
   token: '',
   isAuthenticated: false,
   authenticate: (token) => {},
   userIdHandler: (id) => {},
   logout: () => {},
});

function AuthContextProvider({ children }) {
   const [authToken, setAuthToken] = useState();
   const [userId, setUserId] = useState();

   function authenticate(token) {
      setAuthToken(token);
      AsyncStorage.setItem('token', token);
   }

   function logout() {
      setAuthToken(null);
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('userId');
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