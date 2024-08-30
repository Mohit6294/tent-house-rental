import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-screen">
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
