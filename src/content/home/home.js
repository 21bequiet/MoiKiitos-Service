import { useEffect, useState, useContext } from 'react';

import { TextArea, Button } from 'carbon-components-react';

import { AuthContext } from '../../App';
import AppItemList from '../../component/item/item-list';
import { getPosts, savePost, getCount } from '../../component/services/services';
import { validate } from '../../component/validator/validator';


const AppHome = (
  {
    count,
    setCount
  }
) => {

  const { auth } = useContext(AuthContext);
  const { user } = auth;

  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState(undefined);
  const [validation, setValidation] = useState(
    {
      name: 'Content',
      invalid: false,
      invalidText: undefined,
      validators: [
        { name: 'required' }
      ]
    }
  );

  useEffect(() => {
    getPosts().then(data => {
      setPosts(data.map(item => ({ ...item, user: item.userName })))
    });
    getCount(user.name).then(data => setCount({ following: data.followingCount, follower: data.followerCount }));
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <TextArea
        id='post'
        placeholder='Type something here...'
        hideLabel={true}
        labelText={''}
        invalid={validation.invalid}
        invalidText={validation.invalidText}
        enableCounter={true}
        maxCount={500}
        value={post}
        onChange={e => setPost(e.target.value)}
        onBlur={e => {
          const result = validate(validation.name, e.target.value, validation.validators);
          setValidation({ ...validation, invalid: result.invalid, invalidText: result.invalidText })
        }}
      />

      <div style={{ marginTop: '1rem' }} className='app-flex-end'>
        <Button
          onClick={_ => {
            const result = validate(validation.name, post, validation.validators);
            if (result.invalid) {
              setValidation({ ...validation, invalid: result.invalid, invalidText: result.invalidText })
              return;
            }
            savePost({ userName: user.name, content: post }).then(data => setPosts([{ user: data.userName, content: data.content }, ...posts]));
          }}
        >
          Post
        </Button>
      </div>

      <AppItemList
        items={posts}
        count={count}
        setCount={setCount}
      />
    </>
  )
};

export default AppHome;