import { useState, useEffect } from 'react';

import { Tabs, Tab, Search } from 'carbon-components-react';

import AppItem from '../../component/item/item';
import { getFollowings, getFollowers } from '../../component/services/services';


const AppFollow = ({ tabIndex }) => {

  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowings('Jack').then(data => {
      setFollowings(data.map(item => ({ user: item.userName, content: item.email })));
    });

    getFollowers('Jack').then(data => {
      setFollowers(data.map(item => ({ user: item.userName, content: item.email })));
    })
  }, []);

  return (
    <>
      <Search
        id='search'
        labelText=''
        placeholder='Search'
      />
      <Tabs style={{ marginTop: '1rem' }} selected={tabIndex}>
        <Tab
          id='tab0'
          key='tab0'
          label='Following'
        >
          {
            followings.map((item, row) =>
              <AppItem key={row} item={item} />
            )
          }
        </Tab>
        <Tab
          id='tab1'
          key='tab1'
          label='Follower'
        >
          {
            followers.map((item, row) =>
              <AppItem key={row} item={item} />
            )
          }
        </Tab>
      </Tabs >
    </>

  )
};

export default AppFollow;