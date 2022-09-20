import logo from './logo.svg';
import './App.css';
// Initialize the Supabase JS client
import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

function App() {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Changing signin to signup
  const [loginState, setLoginState] = useState(1);

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
    await console.log(user)
  }
  // Sign out function works. Deletes the entry on the localstorage
  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
  }

  if(loginState===1){
    return (
      <div className="App">
        <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
          <button onClick={()=> setLoginState(2)}>Sign Up</button>
          <button onClick={()=> setLoginState(3)}>Sign In</button>
        </div>
      </div>
    )
  } else if(loginState===2){
    return (
      <div className="App">
        <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
          <button onClick={()=> setLoginState(3)}>Sign In</button>
        </div>
        <div className="pt-1" style={{background:"#dee"}}>
          <p style={{textAlign:"center"}}><b>Sign Up</b></p>
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
              <button onClick={()=> signUpWithEmail() }>Sign Up Button</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else if(loginState===3){
    return(
      <div className="App">
        <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
          <button onClick={()=> setLoginState(2)}>Sign Up</button>
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
              <button onClick={()=> signInWithEmail() }>Sign In Button</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
          <button onClick={()=> signOut() }>Sign Out</button>
        </div>
      </div>
    )
  }
}

export default App;
