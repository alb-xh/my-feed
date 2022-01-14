import { useState, useMemo } from 'react';

import { ApiClient } from '../apiClient';
import { UserContext } from './context';

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await ApiClient.getUser();

    if (res.status !== 200) {
      throw new Error('No user session found!');
    }

    const userData = await res.json();
    setUser(userData);
  };

  const { children } = props;
  const value = useMemo(() => ({
    user,
    getUser,
  }), [user, useMemo]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
