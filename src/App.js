import { createContext, useState } from 'react';

import './App.css';
import AppHeader from './component/header/header';
import AppMain from './component/main/main';
import AppAuth from './component/auth/auth';


export const AuthContext = createContext();


function App() {

  const [auth, setAuth] = useState({ isAuth: false, user: undefined });
  const [count, setCount] = useState({ following: 0, follower: 0 });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <AppHeader count={count} />
      {
        auth.isAuth
          ?
          <AppMain count={count} setCount={setCount} />
          :
          <AppAuth />
      }
    </AuthContext.Provider>
  );
}

export default App;
