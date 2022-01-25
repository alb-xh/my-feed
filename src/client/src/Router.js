import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { useUser } from './user';
import { NavigateTo } from './common';
import {
  Login,
  SignUp,
  Feed,
} from './pages';

export function Router() {
  const { user, getUser } = useUser();

  if (user === undefined) {
    getUser();
    return null;
  }

  if (user === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='*' element={<NavigateTo to='/login' />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='feed' element={<Feed />} />
        <Route path='*' element={<NavigateTo to='/feed' />} />
      </Routes>
    </BrowserRouter>
  );
}
