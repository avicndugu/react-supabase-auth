import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { supabase } from './supabase';
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
function App() {

  // console.log(supabase)
  // console.log(supabase.auth.user)

  // Changing signin to signup
  const [loginState, setLoginState] = useState(1);

  // useEffect(() => {
  //   // Checking user from supabase when app loads
  //   checkUser();
  //   checkSession();
  // })

  const checkUser = async () => {
    /* if a user is signed in, update local state */
    const user = await supabase.auth.getUser();
    console.log(user)
    // const users = await supabase.auth.user();
    // console.log(supabase.auth.user())
    // setUser(users);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </div>
  )
}

export default App;
