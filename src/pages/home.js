import { Link } from "react-router-dom";

export default function Home(){
  return (
    <>
      <div className="navbar" style={{display:"flex", justifyContent: "space-between"}}>
        <Link to="/"><button>Home</button></Link> 
        <div>
          <Link to="/dashboard"><button>Dashboard</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
          <Link to="/signin"><button>Sign In</button></Link>
        </div>
      </div>
      <div className="pt-1" style={{background:"#dee"}}>
        <p style={{textAlign:"center"}}><b>State: Not Logged in</b></p>
      </div>
    </>
  )
}