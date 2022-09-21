import { supabase } from '../supabase';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Dashboard(props){
  const [signInState, setSignInState] = useState(true);
  // const [user, setUser] = useState(null);

  // Sign out function works. Deletes the entry on the localstorage
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  }

    // Listen for the sign out event
  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
      console.log('SIGNED_OUT', session);
      setSignInState(false);
    }
  })
  if(signInState){
    return (
      <>
        <div className="navbar" style={{display:"flex", justifyContent: "space-between"}}>
          <Link to="/"><button>Home</button></Link>
          <button onClick={()=> signOut() }>Sign Out</button>
        </div>
        <div className="pt-1" style={{background:"#dee"}}>
          <p style={{textAlign:"center"}}><b>State: Logged In</b></p>
        </div>
      </>
    )
  } else {
    return <Navigate to="/signin" />;
  }
}