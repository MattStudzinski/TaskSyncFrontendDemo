import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles/styles.css'
import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './componets/dash/Dashboard';
import Header from './componets/ui/Header';
import LoginForm from './componets/forms/LoginForm';
import Signup from './componets/forms/Signup';
import AdminDash from './componets/admin/AdminDash';


function App() {

  const {user} = useAuthContext()
  return (
    <div className='container'>
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
        path='/admin'
        element={user && user.role === 'admin' ? <AdminDash /> : <Navigate to="/" />}
        /> 
      </Routes>
    {/* <IssueForm /> */}
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
