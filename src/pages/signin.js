import { supabase } from '../supabase';
import { Link } from "react-router-dom";

export default function SignIn(props){
  const signInWithEmail = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: 'avicndugu1234@gmail.com',
      password: 'example-password',
    })
  }

  const signUpState = () => {
    signInWithEmail();
    console.log("user");
  }
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
}