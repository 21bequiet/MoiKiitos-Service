import { useState, useEffect, useContext } from 'react';

import { Tabs, Tab, Search } from 'carbon-components-react';

import { AuthContext } from '../../App';
import AppItem from '../../component/item/item';
import { getFollowings, getFollowers } from '../../component/services/services';


const AppFollow = (
  {
    tabIndex,
    count,
    setCount
  }
) => {

  const { auth } = useContext(AuthContext);
  const { user } = auth


  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getFollowings(user.name).then(data => {
      setFollowings(data.map(item => ({ user: item.userName, content: item.email })));
    });

    getFollowers(user.name).then(data => {
      setFollowers(data.map(item => ({ user: item.userName, content: item.email })));
    })
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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
              <AppItem
                key={row}
                item={item}
                count={count}
                setCount={setCount}
                setFollowings={setFollowings}
              />
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
              <AppItem
                key={row}
                item={item}
                follower={true}
              />
            )
          }
        </Tab>
      </Tabs >
    </>
  )
};

export default AppFollow;