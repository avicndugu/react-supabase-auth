import { supabase } from '../supabase';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Dashboard(props){
  // const [user, setUser] = useState(null);

  // Sign out function works. Deletes the entry on the localstorage
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

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
}