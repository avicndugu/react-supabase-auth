export default function SignUp(props){
  return (
    <>
      <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
        <button>Sign In</button>
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