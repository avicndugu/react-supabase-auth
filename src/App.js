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
      <button onClick={()=> signUpWithEmail() }>Sign Up Button</button>
      <button onClick={()=> signInWithEmail() }>Sign In Button</button>
      <button onClick={()=> signOut() }>Sign Out Button</button>

    </div>
  );
}

export default App;
