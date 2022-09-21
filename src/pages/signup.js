import { supabase } from '../supabase';
import { Link } from "react-router-dom";

export default function SignUp(props){
  // Sign up function works
  const signUpWithEmail = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: 'avicndugu1234@gmail.com',
      password: 'example-password',
    })
    // await console.log(user)
  }

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
            <button onClick={()=> props.signUpWithEmail() }>Sign Up Button</button>
          </div>
        </div>
      </div>
    </>
  )
}