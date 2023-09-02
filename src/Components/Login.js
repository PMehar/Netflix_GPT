import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
      // validate the form data (use that checkvalidfunction)
      const message = checkValidData(email.current.value, password.current.value, name.current.value);
      setErrorMessage(message);
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input
          ref={name}
          type="text"
          placeholder="Your Name"
          className="p-4 my-3 w-full bg-gray-700"
        />)}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full  bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick = {handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
