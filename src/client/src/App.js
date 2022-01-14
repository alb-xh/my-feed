import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import {
  useUser,
} from './hooks'

import {
  RequireAuth,
  NavigateTo,
} from './common';

import {
  Login,
  SignUp,
  Feed,
} from './pages';

function App() {
  return (
    <div className='h-screen flex'>
       <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route
            path='feed'
            element={
              <RequireAuth>
                <Feed />
              </RequireAuth>
            }
          />
          <Route path='*' element={<NavigateTo to='/feed' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
