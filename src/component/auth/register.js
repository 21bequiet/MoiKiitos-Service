import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button, TextInput } from 'carbon-components-react';
import { getUser, register } from '../../component/services/services';

const AppRegister = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({ userName: undefined, email: undefined, password: undefined });

  return (
    <>
      <h1>Welcome</h1>
      <TextInput
        id="name"
        type="text"
        labelText="Name"
        invalid={false}
        invalidText="Error message goes here"

        onChange={e => setUser({ ...user, userName: e.target.value })}
        placeholder="Name"
      />
      <TextInput
        id="email"
        type="text"
        labelText="Email"
        invalid={false}
        invalidText="Error message goes here"
        onChange={e => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <TextInput
        id="password"
        type="password"
        labelText="Password"
        invalid={false}
        invalidText="Error message goes here"
        onChange={e => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <TextInput
        id="password2"
        type="password"
        labelText="Password Confirmation"
        invalid={false}
        invalidText="Error message goes here"
        onChange={e => console.log(e.target.value)}
        placeholder="Password Confirmation"
      />
      <Button
        onClick={() => {
          // call save api
          getUser(user.userName).then(data => {
            console.log(data);
            if (data.userName === user.userName) {
              console.log(alert("User is already registered"));

            } else {
              register(user).then(data => {
                console.log(data);
              })
              // nav to login
              navigate('/');
            }
          })

        }}
      >
        Submit
      </Button>
    </>
  )
};

export default AppRegister;