import { useState } from 'react';

import { ApiClient } from '../apiClient';

export function useUserSession() {
  const [ sessionState, setSessionState ] = useState({});

  const {
    user,
    fetching,
    notFound,
  } = sessionState;

  if (!user && !fetching && !notFound) {
    setSessionState({
      ...setSessionState,
      fetching: true
    });

    const fetchUser = async () => {
      const res = await ApiClient.getUser();

      if (res.status !== 200) {
        setSessionState({
          ...setSessionState,
          notFound: true,
          fetching: false,
        });

        return;
      }

      const user = await res.json();

      setSessionState({
        notFound: false,
        fetching: false,
        user,
      });
    }

    fetchUser();
  }

  return sessionState;
}