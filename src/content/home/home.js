import { useState } from 'react';

import { TextArea, Button } from 'carbon-components-react';

import AppItem from '../../component/item/item';

const AppHome = () => {

  const [posts, setPosts] = useState([]);

  return (
    <>
      <TextArea
        id='post'
        labelText=''
        placeholder='Type something here...'
      />
      <div style={{ marginTop: '1rem' }} className='app-flex-end'>
        <Button>Post</Button>
      </div>
      <div style={{ marginTo: '2rem' }}>
        {
          // Array.from(Array(1)).map((_, row) =>
          //   <AppItem key={row} />
          // )
          posts.map((item, row) =>
            <AppItem key={row} item={item} />
          )
        }
      </div>
    </>
  )
};

export default AppHome;