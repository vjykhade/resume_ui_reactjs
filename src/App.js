import './App.css';
import Resume from './component/Resume/Resume';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard/Drawer';
import AppRoutes from './AppRoutes';
import MiniDrawer from './component/dashboard/Drawer';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  console.log("Props check: "+loginStatus)
  const handleLoginStatus = () => {
    setLoginStatus(true)
  }
  return (
    <BrowserRouter>
    <ToastContainer position='top-center' />
    <div>
   {
        loginStatus ? (<>
          <MiniDrawer />
        </>) : (<AppRoutes loginStatus = {loginStatus} handleLoginStatus = {handleLoginStatus}/>)
      }
    </div>

      </BrowserRouter>
  );
}

export default App;
