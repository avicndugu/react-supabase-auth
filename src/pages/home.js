export default function Home(){
  return (
    <>
      <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
      <div className="pt-1" style={{background:"#dee"}}>
        <p style={{textAlign:"center"}}><b>State: Not Logged in</b></p>
      </div>
    </>
  )
}