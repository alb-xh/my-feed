import { getCustomClassName } from '../helpers';
import { Title, TextInput, Button } from '../common';

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
          className='ml-auto mr-0 border-none font-semibold py-2 px-4 text-white bg-slate-800'
          text='Login'
          onClick={() => { alert('click!'); }}
        />
      </div>
    </div>
  );
};
