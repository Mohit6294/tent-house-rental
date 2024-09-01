import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUserDetails } from "../utility/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () =>{
    console.log("mohit")
    localStorage.removeItem('user');
    dispatch(removeUserDetails());
  }

  return (
    <div className=" h-screen">
      <button className="p-2 m-2 bg-red-500 border border-black w-24  font-bold" onClick={logoutHandler}>Sign out</button>
      <ul className="w-[100px] ml-24 mt-12">
        <div className="fixed">
          
          <li className="w-60  bg-blue-500 text-center border border-red-700 m-4 p-2 font-bold text-black text-xl hover:bg-green-400">
            <Link to={""}>Home</Link>
          </li>
          <li className="w-60 font-bold bg-blue-500 text-black text-xl text-center border border-red-700 m-4 p-2 hover:bg-green-400">
            <Link to={"initialize"}>Initialize</Link>
          </li>
          <li className="w-60 font-bold bg-blue-500 text-black text-xl text-center border border-red-700 m-4 p-2 hover:bg-green-400">
            <Link to={"product"}>Product</Link>
          </li>
          <li className="w-60 font-bold text-black bg-blue-500 text-xl text-center border border-red-700 m-4 p-2 hover:bg-green-400">
            <Link to={"customer"}>Customer</Link>
          </li>
          <li className="w-60 font-bold bg-blue-500 text-black text-xl text-center border border-red-700 m-4 p-2 hover:bg-green-400">
            <Link to={"transactions"}>Transactions</Link>
          </li>
          <li className="w-60 font-bold bg-blue-500 text-black text-xl text-center border border-red-700 m-4 p-2 hover:bg-green-400">
            <Link to={"reports"}>Reports</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
