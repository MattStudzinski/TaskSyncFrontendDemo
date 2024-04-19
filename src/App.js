import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import IssueForm from './componets/forms/IssueForm';
import Dashboard from './componets/dash/Dashboard';
import Header from './componets/Header';


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
      </Routes>
    {/* <IssueForm /> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
