import { useState } from 'react';

import { ApiClient } from '../../apiClient';
import { getCustomClassName, onInputChange } from '../../helpers';
import { useUser } from '../../user';
import { Title, TextInput, Button } from '../../common';

export function SignUp(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const { getUser } = useUser();

  const createUser = async () => {
    if (!username || !password || !rePassword) return null;

    if (username.length < 4) {
      alert('Username must be longer than 4 characters!');
      return;
    }

    if (password.length < 8) {
      alert('Password must be longer than 8 characters!');
      return;
    }

    if (password !== rePassword) {
      alert('Passwords don\'t match!');
      return;
    }

    const { status } = await ApiClient.createUser({ username, password });
    if (status >= 300) {
      alert('Something went wrong please try again!');
      return;
    }

    await getUser();
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
