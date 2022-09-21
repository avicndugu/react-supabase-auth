import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';


export default function SignIn(props){
  const [signInState, setSignInState] = useState(false);

  const signInWithEmail = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: 'avicndugu1234@gmail.com',
      password: 'example-password',
    })
  }
  // Listen for the signed in event
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_IN') {
      console.log('SIGNED_IN', session)
      setSignInState(true)
    }
  })

  const signUpState = () => {
    signInWithEmail();
    console.log("user");
  }
  if(!signInState){
    return (
      <>
        <div className="navbar" style={{display:"flex", justifyContent: "space-between"}}>
          <Link to="/"><button>Home</button></Link> 
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
        <div className="pt-1" style={{background:"#ede"}}>
        <p style={{textAlign:"center"}}><b>Sign In</b></p>
          <div className="container pt-1 pb-1">
            <div className="pb-1">
              <label htmlFor="related-images-en">Email</label>
              <br />
              <br />
              <input type="text" id="related-images-en" />
              <br />
              <br />
              <label htmlFor="related-images-en">Password</label>
              <br />
              <br />
              <input type="text" id="related-images-en" />
              <br />
              <br />
              <button onClick={()=> signUpState() }>Sign In Button</button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <Navigate to="/dashboard" />;
  }
}