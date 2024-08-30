import React, { useRef, useState } from "react";
import logo from "../images/ten-house.jpg";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../utility/userSlice";
import { validate } from "../customHooks/validate";


const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user.user);

  const loginHandler = () =>{

    const validateUser =  async (email) =>{
      const data = await fetch("http://localhost:8000/users/"+email);
      const json = await data.json();
      dispatch(addUserDetails(json));
    }

    const isValid = validate(email.current.value,password.current.value);
    console.log(isValid);
    if(isValid !== null){
      setErrorMessage(isValid);
    }else{
       validateUser(email.current.value);
       if(user !== null){
        navigate("/dashboard");
       }else{
        setErrorMessage("Not Authorized");
       }
    }
    
  }

  

  return (
    <div className="bg-white  m-12 p-2 h-[500px] flex justify-center border border-blue-800">
      <div className="bg-blue-200">
        <h1 className="font-bold text-red-600 text-2xl m-10">
          Welcome to Tent House Rental Application
        </h1>
        <img className="p-2 ml-32 w-72" src={logo} alt="brand-logo" />
      </div>
      <div className="m-20">
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              ref={email}
              className="border  m-4 h-10 w-96 p-3 border-blue-800 rounded-lg"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <input
              ref={password}
              className="border border-solid m-4 h-10 w-96 p-3 border-blue-800 rounded-lg"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="bg-red-500 m-4 h-10 w-96 p-2 rounded-lg text-white text-xl font-bold" onClick={loginHandler}>Log In</button>
          <p className="m-2 text-red-400 text-xl font-bold">{errorMessage}</p>
          <p className="m-2 text-red-500 text-xl font-bold">
            New to Tent Rental , Please Sign Up
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
