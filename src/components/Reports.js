import React, { useState } from "react";
import { useSelector } from "react-redux";

const Reports = () => {
  const productData = useSelector((store) => store.product.productDetails);
  const transactionData = useSelector(
    (store) => store.transaction.transactionData
  );
  const [filteredData, setFilteredData] = useState({});

  return (
    <div>
      <div>
        <p className="font-bold text-3xl text-red-600 m-auto p-2">Inventory Summary Reports</p>
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
                    {entity?.quantity_total}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="m-2 p-2 ">
        <p className="font-bold text-2xl text-red-600 m-auto p-2">Inventory Detailed Report</p>
        <hr />
        {productData &&
          productData.map((product) => (
            <div className="text-black p-2 m-2">
              <div className="border border-red-500 border-solid">
                <h1 className=" p-2">Item Name: {product?.product_title}</h1>
                <h2 className=" p-2">
                  Available Quantity:{" "}
                  {product?.quantity_total - product?.quantity_booked}
                </h2>
              </div>
              <div className="p-2 mt-2 -ml-2">
                <table className="border-separate border border-black border-spacing-1 w-auto">
              <thead className="">
                    <tr>
                      <th className="border border-black text-xl p-2">
                        Transaction ID
                      </th>
                      <th className="border border-black text-xl p-2">
                        Date/Time
                      </th>
                      <th className="border border-black text-xl p-2">Type</th>
                      <th className="border border-black text-xl p-2">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  {transactionData
                    .filter((entity) => entity?.product_id === product?.id)
                    .map((entity) => (
                      <tr>
                        <td className="border border-black text-xl p-2">
                          {entity?.id}
                        </td>
                        <td className="border border-black text-xl p-2">
                          {entity?.transaction_date_time}
                        </td>
                        <td className="border border-black text-xl p-2">
                          {entity?.transaction_type}
                        </td>
                        <td className="border border-black text-xl p-2">
                          {entity?.quantity}
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
              <hr className="text-black" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reports;
