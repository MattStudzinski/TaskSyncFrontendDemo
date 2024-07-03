import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/styles.css'
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './componets/dash/Dashboard';
import Header from './componets/ui/Header';
import Sidebar from './componets/ui/Sidebar'
import LoginForm from './componets/forms/LoginForm';
import Signup from './componets/forms/Signup';
import AdminDash from './componets/admin/AdminDash';
import {useLocation} from "react-router-dom"
import HighPriority from './componets/pages/HighPriority';
import NewIssues from './componets/pages/NewIssues';
import OpenIssues from './componets/pages/OpenIssues';
import Complete from './componets/pages/Complete';

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
  const showSidebar = location.pathname !== '/login' && location.pathname !== '/signup'
  const showContainer = location.pathname !== '/login' && location.pathname !== '/signup'
  return (
    <div className={showContainer ? 'container' : ''}>
    
    
<div className='main-content-container'>
  {showSidebar && <Sidebar />}
<div className='main-content'>
  <Routes>
    <Route
    path="/"
    element={user ? <Dashboard /> : <Navigate to="/login"/>}
    />
    <Route
    path="/allissues"
    element={user ? <OpenIssues /> : <Navigate to="/login"/>}
    />
    <Route
    path="/new"
    element={user ? <NewIssues /> : <Navigate to="/login"/>}
    />
    <Route
    path="/priority"
    element={user ? <HighPriority /> : <Navigate to="/login"/>}
    />
    <Route 
    path="/complete"
    element={user ? <Complete /> : <Navigate to="/login"/>}
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
    </div>
  )

}

export default App;
