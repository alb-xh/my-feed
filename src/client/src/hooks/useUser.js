import { useState } from 'react';

import { ApiClient } from '../apiClient';

export function useUser() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await ApiClient.getUser();

    if (res.status !== 200) {
      throw new Error('No user session found!');
    }

    const userData = await res.json();
    setUser(userData);
  };

  return { user, getUser };
}
