import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import useFormLogic from "./useFormLogic";
import Birthday from "./Birthday";
import Gender from "./Gender";
import openEyes from "./images/openEyes.png"
import closeEyes from "./images/closeEyes.png"
import "./registor.css"

function CreateAccount( ) {
  
  const [isPassword, setIsPassword] = useState(false);
  const {handleChange, handleSubmit, errors, user} = useFormLogic()
  const navigate = useNavigate()
 
  return (
  
    <form className="container">
      <h2 className="cr">Create Account</h2>

      <div className="wrapper">

        <div >
          <input 
            className="input"  type="text"
            placeholder = "Your First name..." name="firstName"
            value={user.firstName}  onChange={handleChange}
          />
            {errors.firstName &&
            <label htmlFor="firstName" className="errors">{errors.firstName}</label>}
        </div>

        <div >
          <input 
            className="input"  type="text"
            placeholder = "Your last name..." 
            name="lastName" value={user.lastName}
            onChange={handleChange}
          />
          {errors.lastName &&
            <label htmlFor="lastName" className="errors">{errors.lastName}</label>}
        </div>
         
        <div >
          <input
            className="input"
            type="text"
            placeholder= "Your NickName..." 
            name="nickname"
            value={user.nickname}
            onChange={handleChange}
          />
          {errors.nickname &&
          <label htmlFor="nickname" className="errors">{errors.nickname}</label>}
        </div>

        <div >        
          <input 
            className="input"
            type="text"
            placeholder="Your Email..."
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email &&
          <label htmlFor="email"className="errors">{errors.email}</label>}
        </div> 

        <div className="pas">
          <input
            id="pass"
            className="input"          
            type={isPassword ? "text" : "password"}
            placeholder="Password..."
            value={user.password}
            onChange={handleChange} 
            name="password"
          />
          <img 
            className="eyesIcon"
            src={isPassword ? openEyes : closeEyes}
            onClick={ () => setIsPassword( !isPassword ) }
          /> 
          {errors.password &&
          <label htmlFor="password" className="errors">{errors.password}</label>}
        </div>

        <div >
          <input
            id="passAgain"
            className="input"
            type={isPassword ? "text" : "password"}
            placeholder="again new password"
            name="againPassword"
            value={user.againPassword}
            onChange={handleChange}
          />
          {errors.againPassword &&
          <label className="errors">{errors.againPassword}</label>}
        </div>

        <div>
          <Birthday handleChange={handleChange} user={user}/>
          {errors.datatBirthday &&
          <label className="errors">{errors.datatBirthday}</label>}
        </div>

        <div >
          <Gender handleChange={handleChange}/>
          {errors.gender &&
          <label className="errors">{errors.gender}</label>}
        </div>  
        
        <div>
          <button 
          className="SignUP"
          onClick={handleSubmit }
          >Sign Up</button>
        </div>

        <div>
            <button 
              className="Cancel" 
              onClick={()=>navigate("/login")}           
            >Cancel</button>
        </div>
        </div>
      </form>
    )
}
export default CreateAccount;