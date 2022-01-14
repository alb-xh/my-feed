import { NavLink } from 'react-router-dom';

import { getCustomClassName } from '../../helpers';
import { Title, TextInput, Button } from '../../common';

export function Login (props) {
  return (
    <div className={getCustomClassName(props, 'mx-auto table-caption')} >
      <Title
        className='mt-24'
        text='Login'
      />
      <TextInput
        className='my-5'
        label='Username'
      />
      <TextInput
        className='my-5'
        label='Password'
      />
      <div className='table-cpation'>
        <Button
          className='m-auto mb-3 border-none font-semibold py-1 px-8 text-white bg-slate-800'
          text='Login'
          onClick={() => { alert('click!'); }}
        />
      </div>
      <div className='table-cpation text-center'>
        <NavLink className='underline text-slate-700' to='/signup'>Sign up</NavLink>
      </div>
    </div>
  );
};
