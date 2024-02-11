import { useContext } from 'react';
import './App.css';
import Main from './Components/AppRouter/Main';
import { AuthContext } from './Contexts/AuthContext';
import AuthRouter from './Components/AuthRouter/AuthRoter';

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <>
      {(isLoggedIn()) ? <Main /> : <AuthRouter />}
    </>
  );
}

export default App;
