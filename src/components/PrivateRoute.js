import { Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import { supabase } from '../supabase';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function PrivateRoute() {
  // const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  async function checkSession() {
    const { data, error } = await supabase.auth.getSession()
    await console.log(data.session)
    if (data){
      if (data.session){
        setAuth(true)
      } else{
        setAuth(false)
      }
    }
  }
  checkSession()


  if (auth===null ){
    return (
      <p>Checking whether user is logged in</p>
    )
  } else {
    // Check if authorized
    // If not authorized, show element to sign in page
    return auth ? <Dashboard /> : <Navigate to="/signin" />;
  }
}