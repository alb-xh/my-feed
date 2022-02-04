import { useState, useMemo } from 'react';

import { ApiClient } from '../apiClient';
import { UserContext } from './context';

export function UserProvider(props) {
  const [user, setUser] = useState(undefined);

  const getUser = async () => {
    const res = await ApiClient.getUser();

    if (res.status >= 300) {
      setUser(null);
      return;
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
