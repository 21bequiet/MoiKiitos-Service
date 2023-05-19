import { createContext, useState } from 'react';

import './App.css';
import AppHeader from './component/header/header';
import AppMain from './component/main/main';
import AppAuth from './component/auth/auth';


export const AuthContext = createContext();


function App() {

  const [auth, setAuth] = useState({ isAuth: false, user: undefined });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <AppHeader />
      {
        auth.isAuth
          ?
          <AppMain />
          :
          <AppAuth />
      }
    </AuthContext.Provider>
  );
}

export default App;
