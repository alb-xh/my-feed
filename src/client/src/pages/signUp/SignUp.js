import { useState } from 'react';

import { ApiClient } from '../../apiClient';
import { getCustomClassName, onInputChange } from '../../helpers';
import { Title, TextInput, Button } from '../../common';

export function SignUp(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const createUser = async () => {
    if (
      !username
      || !password
      || !rePassword
      || password !== rePassword
    ) return null;

    await ApiClient.createUser({ username, password });
  };

  return (
    <div className={getCustomClassName(props, 'mx-auto table-caption')}>
      <Title
        className='mt-24'
        text='Sign up'
      />
      <TextInput
        className='my-5'
        label='Username'
        value={username}
        onChange={onInputChange(setUsername)}
      />
      <TextInput
        className='my-5'
        label='Password'
        type='password'
        value={password}
        onChange={onInputChange(setPassword)}
      />
      <TextInput
        className='my-5'
        label='Retype password'
        type='password'
        value={rePassword}
        onChange={onInputChange(setRePassword)}
      />
      <div className='table-cpation'>
        <Button
          className='m-auto mb-3 border-none font-semibold py-1 px-8 text-white bg-slate-800'
          text='Create'
          onClick={createUser}
        />
      </div>
    </div>
  );
}
