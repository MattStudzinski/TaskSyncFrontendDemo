import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/styles.css'
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './componets/dash/Dashboard';
import Header from './componets/Header';
import LoginForm from './componets/forms/LoginForm';
import Signup from './componets/forms/Signup';
import AllTickets from './allTickets/AllTickets';


function App() {

  const {user} = useAuthContext()
  return (
    <>
    <BrowserRouter>
    <Header />
    
    <div className='pages'>
      <Routes>
        <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login"/>}
        />
        <Route
        path="/login"
        element={!user ? <LoginForm /> : <Navigate to="/"/>}
        />
        <Route
        path="/signup"
        element={!user ? <Signup /> : <Navigate to="/"/>}
        />
        <Route
        path='/alltickets'
        element={user ? <AllTickets /> : <Navigate to= "/login"/>}
        />
      </Routes>
    {/* <IssueForm /> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
