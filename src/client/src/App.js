
import { UserProvider } from './user';
import { Router } from './Router';


function App() {
  return (
    <UserProvider>
      <div className='h-screen flex'>
        <Router />
      </div>
    </UserProvider>
  );
}

export default App;
