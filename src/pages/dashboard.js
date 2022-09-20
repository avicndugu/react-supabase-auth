export default function SignUp(){
  return (
    <>
      <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
        <button onClick={()=> setLoginState(1) }>Sign Out</button>
        {/*<button onClick={()=> signOut() }>Sign Out</button>*/}
      </div>
      <div className="pt-1" style={{background:"#dee"}}>
        <p style={{textAlign:"center"}}><b>State: Logged In</b></p>
      </div>
    </>
  )
}