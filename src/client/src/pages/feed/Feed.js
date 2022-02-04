import { useUser } from '../../user';
import { getCustomClassName } from '../../helpers';

import { ApiClient } from '../../apiClient';
import { Title, Button } from '../../common';

export function Feed(props) {
  const { user, getUser } = useUser();

  const signOut = async () => {
    await ApiClient.signOut();
    await getUser();
  };

  return (
    <div className={getCustomClassName(props, 'w-full')}>
      <nav className='w-full flex items-center h-16 bg-black'>
        <Title
          className='text-white px-12'
          text='My Feed'
        />
        <Button
          className='text-white ml-auto h-full px-3 w-36 bg-slate-800 hover:bg-slate-700'
          text={`Logout ${user.username}`}
          onClick={signOut}
        />
      </nav>
    </div>
  );
}
