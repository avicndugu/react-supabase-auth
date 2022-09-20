import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
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

  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // Checking user from supabase when app loads
  //   checkUser();
  //   checkSession();
  // })

  const checkSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    // console.log(data)
    // console.log(data.session.user.email)
    setUser(data.session.user);
    // return data.session.user.email

    // console.log(data.session.user)
    // const session = await supabase.auth.getSession();
    // console.log(session)
  }

  checkSession();
  const checkUser = async () => {
    /* if a user is signed in, update local state */
    const user = await supabase.auth.getUser();
    console.log(user)
    // const users = await supabase.auth.user();
    // console.log(supabase.auth.user())
    // setUser(users);
  }

  const signInWithEmail = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: 'avicndugu1234@gmail.com',
      password: 'example-password',
    })
  }

  // Sign up function works
  const signUpWithEmail = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: 'avicndugu1234@gmail.com',
      password: 'example-password',
    })
    // await console.log(user)
  }
  // Sign out function works. Deletes the entry on the localstorage
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  if(loginState===1){
    return (
      <div className="App">
        <Home />
      </div>
    )
  } else if(loginState===2){
    return (
      <div className="App">
        <SignUp />
      </div>
    )
  } else if(loginState===3){
    return(
      <div className="App">
        <SignIn />
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <Dashboard />
      </div>
    )
  }
}

export default App;
