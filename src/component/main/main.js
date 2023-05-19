import { Routes, Route } from 'react-router-dom';

import { Content } from 'carbon-components-react';

import AppHome from '../../content/home/home';
import AppFollow from '../../content/follow/follow';
import AppFooter from '../../component/footer/footer';

const AppMain = (
  {
    count,
    setCount
  }
) => {
  return (
    <>
      <Content className='app-main'>
        <Routes>
          <Route
            path='/'
            element={<AppHome count={count} setCount={setCount} />}
          />
          <Route
            path='/followings'
            element={<AppFollow tabIndex={0} count={count} setCount={setCount} />}
          />
          <Route
            path='/followers'
            element={<AppFollow tabIndex={1} count={count} setCount={setCount} />}
          />
        </Routes>
      </Content>
      <AppFooter />
    </>
  );
}

export default AppMain;