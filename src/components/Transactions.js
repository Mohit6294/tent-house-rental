import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import { DEFAULT_URL } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTransactionDetails } from "../utility/transactionSlice";
import TableData from "./TableData";
import { Link, Outlet, useNavigate } from "react-router-dom";
import TransactionForm from "./TransactionForm";

const Transactions = () => {

  const dispatch = useDispatch();
  const transactionData = useSelector(store=>store.transaction?.transactionData);
  const  [isTransactionFormActive,setIsTransactionFormActive] = useState(false);
  const navigate = useNavigate();


  const getTransactionData = async(url,entity) =>{
      const data = await fetch(url+entity);
      const json = await data.json();
      dispatch(addTransactionDetails(json));
  }


  useEffect(()=>{
    getTransactionData(DEFAULT_URL,"transactions");
  },[])

  return (
    <div className="flex ">
      <div>
     {!isTransactionFormActive && (<table className="border-separate border border-black border-spacing-1 w-auto">
        <thead className="">
          <tr>
            <th className="border border-black text-xl p-1">Transaction ID</th>
            <th className="border border-black text-xl p-1">Transaction Date</th>
            <th className="border border-black text-xl p-1">Customer ID</th>
            <th className="border border-black text-xl p-1">PROUDCT ID</th>
            <th className="border border-black text-xl p-1">Transaction Type</th>
            <th className="border border-black text-xl p-1">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {transactionData &&
            transactionData.map((entity) => (
              <tr>
                <TableData id={entity.id} data = {entity.id} />
                <TableData id={entity.id} data = {entity.transaction_date_time} />
                <TableData id={entity.id} data = {entity.customer_id} />
                <TableData id={entity.id} data = {entity.product_id} />
                <TableData id={entity.id} data = {entity.transaction_type} />
                <TableData id={entity.id} data = {entity.quantity} />
              </tr>
            ))}
        </tbody>
      </table>)}
      </div>
      {isTransactionFormActive && (<div>
          <TransactionForm />
      </div>)}
      <Link className=" p-2 text-red-700 font-bold" to={"inOutTransaction"} onClick={()=>{
        setIsTransactionFormActive(!isTransactionFormActive);
      }}>
            {isTransactionFormActive? "Want to see Transaction Details, Click Here" : "Want to Add Transaction Detail,Click Here"}
      </Link>
    </div>
  );
};

export default Transactions;
