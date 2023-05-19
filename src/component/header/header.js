import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavLink
} from 'carbon-components-react';

import { AuthContext } from '../../App';


const AppHeader = () => {

  const navigate = useNavigate();

  const { auth, setAuth } = useContext(AuthContext);
  const { user } = auth;

  const sideNavs = [
    {
      label: user ? user.name : 'unknow',
      path: '/'
    },
    {
      label: 'Following',
      path: '/followings'
    },
    {
      label: 'Follower',
      path: '/followers'
    }
  ];

  const [sideNavActive, setSideNavActive] = useState(sideNavs[0]);

  return (
    <HeaderContainer
      render={() => {
        return (
          <Header aria-label='Header'>
            <HeaderName prefix=''>
              <span>Moi Kiitos</span>
            </HeaderName>
            {
              auth.isAuth &&
              <SideNav aria-label='Side menu'>
                <SideNavItems>
                  {
                    sideNavs.map((item, index) =>
                      <div className='app-badge-container' key={index}>
                        <SideNavLink
                          element={Link}
                          isActive={sideNavActive.label === item.label}
                          to={item.path}
                          onClick={_ => setSideNavActive(item)}
                        >
                          {item.label}
                        </SideNavLink>
                        {
                          index > 0 &&
                          <div className='app-badge'>{index * 2}</div>
                        }
                      </div>
                    )
                  }
                </SideNavItems>
              </SideNav>
            }

            <HeaderGlobalBar>
              {
                auth.isAuth
                  ?
                  <HeaderGlobalAction aria-label='Logout' onClick={_ => {
                    setAuth({ isAuth: false, user: undefined });
                    navigate('/');
                  }}>
                    Logout
                  </HeaderGlobalAction>
                  :
                  <HeaderGlobalAction aria-label='Login' onClick={_ => navigate('/register')}>
                    Sign Up
                  </HeaderGlobalAction>
              }
            </HeaderGlobalBar>
          </Header >
        )
      }}
    />
  );
};

export default AppHeader;
