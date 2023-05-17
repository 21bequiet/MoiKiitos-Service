import { Routes, Route } from 'react-router-dom';

import { Content } from 'carbon-components-react';

import AppHome from '../../content/home/home';
import AppFollow from '../../content/follow/follow';

const AppMain = () => {
  return (
    <Content className='app-main'>
      <Routes>
        {/* <Route
            path='/authorization-code/callback'
            element={
              <Navigate to="/" replace="true" />
            }
          /> */}
        <Route
          path='/'
          element={<AppHome />}
        />
        <Route
          path='/followings'
          element={<AppFollow tabIndex={0} />}
        />
        <Route
          path='/followers'
          element={<AppFollow tabIndex={1} />}
        />
      </Routes>
    </Content>
  );
}

export default AppMain;