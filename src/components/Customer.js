import React, { useEffect } from 'react'
import { DEFAULT_URL } from '../utility/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerDetails } from '../utility/customerSlice';

const Customer = () => {

  const dispatch = useDispatch();
  const customerData = useSelector(store=>store.customer.customerDetails);

  const getCustomerDetails = async (url,entity)=>{
    const data = await fetch(url+entity);
    const json = await data.json();
    dispatch(addCustomerDetails(json));
  }

  useEffect(()=>{
    getCustomerDetails(DEFAULT_URL,"customers");

  },[])

  return (
    <div className='m-10 p-2'>
          <table className="border-separate border border-black border-spacing-1 w-auto">
        <thead className="">
          <tr>
            <th className="border border-black text-xl p-2">Customer ID</th>
            <th className="border border-black text-xl p-2">Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {customerData &&
            customerData.map((entity) => (
              <tr>
                <td className="border border-black text-xl p-2">{entity?.id}</td>
                <td className="border border-black text-xl p-2">{entity?.customer_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customer