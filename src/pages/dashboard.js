export default function Dashboard(props){
  return (
    <>
      <div className="navbar" style={{display:"flex", justifyContent: "right"}}>
        <button>Sign Out</button>
        {/*<button onClick={()=> props.signOut() }>Sign Out</button>*/}
      </div>
      <div className="pt-1" style={{background:"#dee"}}>
        <p style={{textAlign:"center"}}><b>State: Logged In</b></p>
      </div>
    </>
  )
}