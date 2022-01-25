import "./style.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";  


function LogIn() {
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState();
    const {signin} = useAuth();
    const navigate = useNavigate();

    useEffect( () => {
      fetch('http://localhost:8000/users')
      .then( (res) => res.json() )
      .then( (res) => setData(res) );
      return () => setData(null);
    }, [] )

    const handleSubmit = () => {
      const index = data.findIndex( (elem) => elem.nickname === nickname && elem.password === password );
      if (index >= 0) {
        signin( data[index], () => { navigate("/") } )
      } 
    }
    
    return (
      <>
      <div className="window">
         <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" id="img"/>
         <h2 id="wm">Welcome to Maket</h2>
            <input type="text" 
            placeholder=" Your nicknameName..." 
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            />
        <br/>
            <input type="password"
            placeholder=" Your password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        <br/>
        
        
        
         <button type="submit" className="logIN"
            onClick={handleSubmit}>Log In</button>
        
        <br/>
          <Link to="/registor">
           <button className="Cr">
          Create new account
          </button>
          </Link>
      </div>
        </>
      
    ) 
  }
  export default LogIn;