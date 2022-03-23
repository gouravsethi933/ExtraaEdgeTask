import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
const App=()=>{
     const username="gouravsethi933";
     const password="gourav.143"
     const [user, setUser]= useState("");
     const[pass, setPass]= useState("");

     return(
          <div className="maindiv">
          <div className="firstdiv">
          <h1>Login Here</h1>
          <input type="username" placeholder="username" value={user} onChange={(e)=>{
               setUser(e.target.value);
          }}/>
          <input type="password" placeholder="password" value={pass} onChange={(e)=>{
               setPass(e.target.value)
          }}/>
          <Link to="/Weather">
             <button disabled={(user!= username)&&(pass!=password)}>Submit</button>

          </Link>
          
          </div>
          </div>
          

     )
}
export default App;