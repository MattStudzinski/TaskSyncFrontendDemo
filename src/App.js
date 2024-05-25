import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/styles.css'
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './componets/dash/Dashboard';
import Header from './componets/ui/Header';
import LoginForm from './componets/forms/LoginForm';
import Signup from './componets/forms/Signup';
import AdminDash from './componets/admin/AdminDash';
import {useLocation} from "react-router-dom"

function App() {


  return (
    
    <BrowserRouter>
    <PrimaryRoutes />
    </BrowserRouter>
    
  );
}

function PrimaryRoutes () {
  const {user} = useAuthContext()
  const location = useLocation()

  const showHeader = location.pathname !== '/login' && location.pathname !== '/signup'
  const showContainer = location.pathname !== '/login' && location.pathname !== '/signup'
  return (
    <div className={showContainer ? 'container' : ''}>
    {showHeader && <Header />}

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
    path='/admin'
    element={user && user.role === 'admin' ? <AdminDash /> : <Navigate to="/" />}
    /> 
  </Routes>
{/* <IssueForm /> */}
</div>
    </div>
  )

}

export default App;
