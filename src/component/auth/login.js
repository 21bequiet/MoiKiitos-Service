import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, TextInput } from 'carbon-components-react';

import { AuthContext } from '../../App';
import { validate, validateMany } from '../validator/validator';

const AppLogin = () => {

  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const [user, setUser] = useState({ name: undefined, password: undefined });
  const [validation, setValidation] = useState(
    {
      name: {
        id: 'name',
        name: 'Name/Email',
        invalid: false,
        invalidText: undefined,
        validators: [
          { name: 'required' }
        ]
      },
      password: {
        id: 'password',
        name: 'Password',
        invalid: false,
        invalidText: undefined,
        validators: [
          { name: 'required' }
        ]
      }
    }
  );

  return (
    <>
      <h1>Welcom</h1>
      <TextInput
        id={validation.name.id}
        type="text"
        placeholder="Name/Email"
        labelText={validation.name.name}
        invalid={validation.name.invalid}
        invalidText={validation.name.invalidText}
        onChange={e => setUser({ ...user, name: e.target.value })}
        onBlur={e => {
          const result = validate(validation.name.name, e.target.value, validation.name.validators);
          setValidation({ ...validation, name: { ...validation.name, invalid: result.invalid, invalidText: result.invalidText } })
        }}
      />
      <TextInput
        id={validation.password.id}
        type="password"
        placeholder="Password"
        labelText={validation.password.name}
        invalid={validation.password.invalid}
        invalidText={validation.password.invalidText}
        onChange={e => setUser({ ...user, password: e.target.value })}
        onBlur={e => {
          const result = validate(validation.password.name, e.target.value, validation.password.validators);
          setValidation({ ...validation, password: { ...validation.password, invalid: result.invalid, invalidText: result.invalidText } })
        }}
      />
      <Button
        onClick={() => {
          const result = validateMany(user, validation)
          if (!result.valid) {
            setValidation({ ...validation, ...result.error });
            return;
          }

          auth.setAuth({ isAuth: true, user: { name: user.name } })
          navigate('/')
        }}
      >
        Submit
      </Button>
    </>
  )
};

export default AppLogin;