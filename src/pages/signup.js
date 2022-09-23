import { supabase } from '../supabase';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp(props){
  const [signedUp, setSignedUp] = useState(null);
  // Sign up function works
  const signUpWithEmail = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: 'avicnduguh@gmail.com',
      password: 'test-password-2022',
    })
    // const user = await supabase.auth.user()
    console.log(data)
    console.log(data.session)
    // console.log(data.user)
    console.log(data.user.email)
    setSignedUp(data.user.email);
  }
  if(signedUp===null){
    return (
      <>
        <div className="navbar" style={{display:"flex", justifyContent: "space-between"}}>
          <Link to="/"><button>Home</button></Link> 
          <Link to="/signin"><button>Sign In</button></Link> 
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
      </>
    )
  } else {
    return (
      <>
        <div className="navbar" style={{display:"flex", justifyContent: "space-between"}}>
          <Link to="/"><button>Home</button></Link> 
          <Link to="/signin"><button>Sign In</button></Link> 
        </div>
        <div className="pt-1">
          <p>You need to confirm your email address after signing up.</p>
          <p>We have sent you an email with a link to: <b> { signedUp } </b>(the email you have used to sign up).</p>
          <p>To start using your account, click on the confirmation link in the email.</p>
        </div>
      </>
    )
  }
}