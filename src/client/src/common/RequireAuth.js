import { useNavigate } from 'react-router-dom';

import { useUser } from '../user';

export function RequireAuth(props) {
  const { user, getUser } = useUser();
  const navigate = useNavigate();

  const { children } = props;

  if (!user) {
    getUser()
      .catch(() => {
        navigate('/login');
      });

    return null;
  }

  return children;
}
