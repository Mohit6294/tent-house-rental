import React, { useEffect } from "react";
import { DEFAULT_URL } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addProductsDetails } from "../utility/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const productData = useSelector((store) => store.product.productDetails);

  const getProductDetails = async (url, entity) => {
    const data = await fetch(url + entity);
    const json = await data.json();
    json.sort((a, b) => a.product_title.localeCompare(b.product_title));
    dispatch(addProductsDetails(json));
  };

  useEffect(() => {
    getProductDetails(DEFAULT_URL, "products");
  }, []);

  return (
    <div className="m-10 p-2">
      <table className="border-separate border border-black border-spacing-1 w-auto">
        <thead className="">
          <tr>
          <th className="border border-black text-xl p-2">Product ID</th>
            <th className="border border-black text-xl p-2">Product Title</th>
            <th className="border border-black text-xl p-2">Total Quantity</th>
            <th className="border border-black text-xl p-2">Quantity Booked</th>
            <th className="border border-black p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {productData &&
            productData.map((entity) => (
              <tr>
                <td className="border border-black text-xl p-2">{entity?.id}</td>
                <td className="border border-black text-xl p-2">{entity?.product_title}</td>
                <td className="border border-black text-xl p-2">{entity?.quantity_total}</td>
                <td className="border border-black text-xl p-2">{entity?.quantity_booked}</td>
                <td className="border border-black text-xl p-2">{entity?.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* {<button className="bg-red-500" >Add Product</button>} */}
    </div>
  );
};

export default Product;
