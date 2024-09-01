import React, { useState } from "react";
import { useSelector } from "react-redux";

const Reports = () => {
  const productData = useSelector((store) => store.product.productDetails);
  const transactionData = useSelector(
    (store) => store.transaction.transactionData
  );
  const [filteredData,setFilteredData] = useState({});
  
  return (
    <div>
      <div>
        <p>Inventory Summary Reports</p>
        <table className="border-separate border border-black border-spacing-1 w-auto">
          <thead className="">
            <tr>
              <th className="border border-black text-xl p-2">Item ID</th>
              <th className="border border-black text-xl p-2">Item Name</th>
              <th className="border border-black text-xl p-2">
                Available Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {productData &&
              productData.map((entity) => (
                <tr>
                  <td className="border border-black text-xl p-2">
                    {entity?.id}
                  </td>
                  <td className="border border-black text-xl p-2">
                    {entity?.product_title}
                  </td>
                  <td className="border border-black text-xl p-2">
                    {entity?.quantity_total - entity?.quantity_booked}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="m-2 p-2">
        <p>Inventory Detailed Report</p>
        <hr />
        {productData &&
          productData.map((product) => (
            <div className="text-black p-2 m-2">
              <div>
                <h1 className=" p-2">Item Name: {product?.product_title}</h1>
                <h2 className=" p-2">
                  Available Quantity:{" "}
                  {product?.quantity_total - product?.quantity_booked}
                </h2>
              </div>
              <div>
                
              {
                transactionData.filter((entity)=>{
                  if(entity?.product_id === product?.id){
                    <div>
                      <p>entity?.id</p>
                    </div>
                  }
                })
              }
                
              </div>
              <hr className="text-black" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reports;
