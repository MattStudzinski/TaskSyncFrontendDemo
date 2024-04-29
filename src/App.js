import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import IssueForm from './componets/forms/IssueForm';
import Dashboard from './componets/dash/Dashboard';
import Header from './componets/Header';
import LoginForm from './componets/forms/LoginForm';
import Signup from './componets/forms/Signup';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    
    <div className='pages'>
      <Routes>
        <Route
        path="/"
        element={<Dashboard />}
        />
        <Route
        path="/login"
        element={<LoginForm />}
        />
        <Route
        path="/signup"
        element={<Signup />}
        />
      </Routes>
    {/* <IssueForm /> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
