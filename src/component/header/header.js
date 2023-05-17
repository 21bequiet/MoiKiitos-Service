import { useState } from 'react';
import { Link } from 'react-router-dom';

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


export const sideNavs = [
  {
    label: 'Jack',
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
]

const AppHeader = () => {

  const [sideNavActive, setSideNavActive] = useState(sideNavs[0]);

  return (
    <HeaderContainer
      render={() => {
        return (
          <Header aria-label='Header'>
            <HeaderName prefix=''>
              <span>Moi Kiitos</span>
            </HeaderName>

            <SideNav aria-label='Side menu'>
              <SideNavItems>
                {
                  sideNavs.map((item, index) =>
                    <div className='app-builder-badge-container' key={index}>
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
                        <div className='app-builder-badge'>{index * 2}</div>
                      }
                    </div>
                  )
                }
              </SideNavItems>
            </SideNav>

            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label='Login' onClick={_ => console.log('login')}>
                Login
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label='Logout' onClick={_ => console.log('logout')}>
                Logout
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header >
        )
      }}
    />
  );
};

export default AppHeader;
