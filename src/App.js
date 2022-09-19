import logo from './logo.svg';
import './App.css';
// Initialize the Supabase JS client
import { createClient } from '@supabase/supabase-js';


function App() {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  

  return (
    <div className="App">
      <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
        <button>Sign Up</button>
        <button>Sign In</button>
        <button onClick={()=> signOut() }>Sign Out</button>
      </div>
      <div className="pt-1" style={{background:"#eee"}}>
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
  );
}

export default App;
