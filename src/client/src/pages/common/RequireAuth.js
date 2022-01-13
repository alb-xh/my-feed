import { useUserSession } from '../hooks';
import { NavigateTo } from './NavigateToJs';

export function RequireAuth (props) {
  const { children } = props;
  const { user, fetching } = useUserSession();

  if (!user) {
    if (fetching) return null;
    return <NavigateTo to='/login' />;
  }

  return children;
};
