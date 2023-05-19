
import { Routes, Route } from 'react-router-dom';

import AppLogin from './login';
import AppRegister from './register';


const AppAuth = () => {
  return (
    <div className='app-flex-center app-auth-panel'>
      <div className='app-auth-form'>
        <Routes>
          <Route
            path='/'
            element={<AppLogin />}
          />
          <Route
            path='/register'
            element={<AppRegister />}
          />
        </Routes>
      </div>
    </div>
  )
};

export default AppAuth;