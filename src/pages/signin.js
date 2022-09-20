export default function SignUp(){
  return (
    <>
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
    </>
  )
}