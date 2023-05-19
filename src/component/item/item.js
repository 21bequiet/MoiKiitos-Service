import { useContext } from 'react';

import { Row, Column, Link } from 'carbon-components-react';

import { AuthContext } from '../../App';
import { follow } from '../../component/services/services';

const AppItem = ({ item }) => {

  const { auth } = useContext(AuthContext);
  const { user } = auth;

  return (
    <Row style={item.user === user.name ? { flexDirection: 'row-reverse' } : {}}>
      <Column style={{ textAlign: 'center' }} lg={{ span: 1 }}>
        {
          item.user === user.name
            ?
            <>{item.user}</>
            :
            <Link
              className='app-link'
              onClick={_ => {
                follow(user.name, { userName: item.user }).then(data => console.log('followed->', data));
              }}
            >
              {item.user}
            </Link>
        }
      </Column>
      <Column>{item.content}</Column>
    </Row>
  )
};

export default AppItem;