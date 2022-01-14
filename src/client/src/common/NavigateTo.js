import {
  Navigate,
  useLocation,
} from 'react-router-dom';

export function NavigateTo(props) {
  const { to } = props;
  const location = useLocation();

  return <Navigate to={to} state={{ from: location }} replace />;
}
