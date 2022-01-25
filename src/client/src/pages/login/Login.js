import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import { ApiClient } from '../../apiClient';
import { useUser } from '../../user';
import { getCustomClassName, onInputChange } from '../../helpers';
import { Title, TextInput, Button } from '../../common';

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { getUser } = useUser();
  const navigate = useNavigate();

  const signInUser = async () => {
    if (!username || !password) return;

    if (username.length < 4 || password.length < 8) {
      alert('Username or password is invalid!');
      return;
    }

    try {
      await ApiClient.signIn({ username, password });
      await getUser();

      navigate('/');
    } catch (err) {
      // console.error(err);
    }
  };

  return (
    <div className={getCustomClassName(props, 'mx-auto table-caption')}>
      <Title
        className='mt-24'
        text='Login'
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
      <div className='table-cpation'>
        <Button
          className='m-auto mb-3 border-none font-semibold py-1 px-8 text-white bg-slate-800'
          text='Login'
          onClick={signInUser}
        />
      </div>
      <div className='table-cpation text-center'>
        <NavLink className='underline text-slate-700' to='/signup'>Sign up</NavLink>
      </div>
    </div>
  );
}
