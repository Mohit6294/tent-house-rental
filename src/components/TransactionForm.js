import React, { useEffect, useRef, useState } from 'react'
import InputComponent from './InputComponent'
import { DEFAULT_URL, INITALIZE_CUSTOMER_OPTION } from '../utility/constants'
import { useSelector } from 'react-redux';

const TransactionForm = () => {
   const customerData = useSelector((store)=>store.customer.customerDetails);
   const productData = useSelector((store)=>store.product.productDetails);
   const [message,setMessage] = useState(null);
   const [productId,setProductId] = useState(productData[0].id);
   const [customerId,setCustomerId] = useState(customerData[0].id);
   const [quantity,setQuantity] = useState(0);
   const [transactionType,setTransactionType] = useState('IN');


    

  const saveTransactionPossible = async(totalQuantity,quantityBooked) =>{
    const OPTIONS = {
      method: 'post',
      headers:{
        'Content-Type':  'application/json',
      },
      body:JSON.stringify({
          transaction_date_time:new Date().toLocaleString(),
          customer_id:customerId,
          transaction_type: transactionType,
          product_id:productId,
          quantity:quantity
      }),
    }
    const data = await fetch(DEFAULT_URL+"transactions",OPTIONS);
    const json = await data.json();
    console.log("saved successfully"+json);
    
  }

  const saveTransactionHanlder = async () =>{
    try{
        const data = await fetch(DEFAULT_URL+"products/"+productId);
        const json = await data.json();
        const availableQuantity = json?.quantity_total - json?.quantity_booked;
        console.log(availableQuantity,'  ',quantity);
        if(availableQuantity >= quantity && transactionType == "OUT"){
            saveTransactionPossible(json?.quantity_total-quantity,json?.quantity_booked + quantity);
        }else if(transactionType == 'IN'){
          saveTransactionPossible(json?.quantity_total+quantity,json?.quantity_booked - quantity);
        }
        setMessage("Successfully Completed The transaction");
        
    }catch(error){
        setMessage(error);
    }
  }

  return (
    <div className='p-2 m-2'>
      <div className=''>
        <label>Select Product ID</label>
      <select defaultValue={productData[0].id} value={productId} className='m-5 ml-10 p-2' onChange={(e)=>{
        setProductId(e.target?.value)
        
      }}>
        {productData && productData.map((entity)=>(<option>{entity.id}</option>))}
      </select>
      </div>
      <div >
        <label>Select Customer ID</label>
      <select  defaultValue={customerData[0].id} value={customerId} className='m-5 ml-10 p-2' onChange={(e)=>{setCustomerId(e.target?.value)}}>
        {customerData && customerData.map((entity)=>(<option>{entity.id}</option>))}
      </select>
      </div>
      <div>
        <label>Select Transaction Type</label>
      <select   defaultValue={"IN"} value={transactionType} className='m-5 p-2' onChange={(e)=>setTransactionType(e.target?.value)}>
        <option value={"IN"}>IN</option>
        <option value={"OUT"}>OUT</option>
      </select>
      </div>
      <div>
        <label>Select Quantity</label>
        <input defaultValue={'0'} value={quantity} onChange={(e)=>setQuantity(e.target?.value)} type="number" placeholderText="Enter Quantity" className="p-2  ml-10 bg-white text-xl font-bold " /> 
      </div>
      <div>
        <p className=''>{message}</p>
        <button className='bg-red-600 text-white p-2 m-10 w-1/2 rounded-lg border border-green-500' onClick={saveTransactionHanlder}>Submit</button>
      </div>
    </div>
  )
}

export default TransactionForm