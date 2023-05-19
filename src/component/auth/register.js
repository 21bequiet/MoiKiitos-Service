import { useNavigate } from 'react-router-dom';

import { Button, TextInput } from 'carbon-components-react';

const AppRegister = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1>Welcom</h1>
      <TextInput
        id="name"
        type="text"
        labelText="Name"
        invalid={false}
        invalidText="Error message goes here"
        onChange={e => console.log(e.target.value)}
        placeholder="Name"
      />
      <TextInput
        id="email"
        type="text"
        labelText="Email"
        invalid={false}
        invalidText="Error message goes here"
        onChange={e => console.log(e.target.value)}
        placeholder="Email"
      />
      <TextInput
        id="password"
        type="password"
        labelText="Password"
        invalid={false}
        invalidText="Error message goes here"
        onChange={e => console.log(e.target.value)}
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
        onClick={() => navigate('/')}
      >
        Submit
      </Button>
    </>
  )
};

export default AppRegister;