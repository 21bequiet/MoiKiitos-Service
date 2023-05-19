import { useContext } from 'react';

import { Row, Column, Link } from 'carbon-components-react';

import { AuthContext } from '../../App';
import { follow } from '../../component/services/services';

const AppItem = (
  {
    item,
    count,
    setCount,
    setFollowings,
    follower
  }
) => {

  const { auth } = useContext(AuthContext);
  const { user } = auth;

  return (
    <Row style={item.user === user.name ? { flexDirection: 'row-reverse' } : {}}>
      <Column style={{ textAlign: 'center' }} lg={{ span: 1 }}>
        {
          (item.user === user.name || follower)
            ?
            <>{item.user}</>
            :
            <Link
              className='app-link'
              onClick={_ =>
                follow(user.name, { userName: item.user }).then(data => {
                  setCount({ ...count, following: data.followingList?.length })
                  if (setFollowings) {
                    setFollowings(data.followingList);
                  }
                })
              }
            >
              {item.user}
            </Link>
        }
      </Column>
      <Column>{item.content}</Column>
    </Row >
  )
};

export default AppItem;