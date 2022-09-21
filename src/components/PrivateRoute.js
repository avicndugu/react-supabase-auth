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

  async function checkUser() {
    try {
      const user = await supabase.auth.getUser()
      if(user){
        setAuth(true)
        // setCurrentUser(user)
        // console.log(user)

      } else if(user===null){
        // setTimeout(console.log(user), 1)

      }
      return user
    } catch (error) {
      return error
    }
  }

  checkUser()



  if (!auth || !currentUser){
    return (
      <p>Checking whether user is logged in</p>
    )
  } else {
    // Check if authorized
    // const auth = null;
    // If not authorized, show element to sign in page
    return auth ? <Dashboard /> : <Navigate to="/signin" />;
  }
}