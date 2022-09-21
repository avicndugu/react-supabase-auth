import { supabase } from '../supabase';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Dashboard(props){
  const [user, setUser] = useState(null);

  // Sign out function works. Deletes the entry on the localstorage
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

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
  // checkSession();

  return (
    <>
      <div className="navbar" style={{display:"flex", justifyContent: "space-between"}}>
        <Link to="/"><button>Home</button></Link>
        <button>Sign Out</button>
        {/*<button onClick={()=> props.signOut() }>Sign Out</button>*/}
      </div>
      <div className="pt-1" style={{background:"#dee"}}>
        <p style={{textAlign:"center"}}><b>State: Logged In</b></p>
      </div>
    </>
  )
}