import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { supabase } from './supabase';
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
        <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
          <button onClick={()=> setLoginState(2)}>Sign Up</button>
          <button onClick={()=> setLoginState(3)}>Sign In</button>
        </div>
        <div className="pt-1" style={{background:"#dee"}}>
          <p style={{textAlign:"center"}}><b>State: Not Logged in</b></p>
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
              {/*<button onClick={()=> setLoginState(4) }>Sign In Button</button>*/}
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
          <button onClick={()=> setLoginState(1) }>Sign Out</button>
          {/*<button onClick={()=> signOut() }>Sign Out</button>*/}
        </div>
        <div className="pt-1" style={{background:"#dee"}}>
          <p style={{textAlign:"center"}}><b>State: Logged In</b></p>
        </div>
      </div>
    )
  }
}

export default App;
