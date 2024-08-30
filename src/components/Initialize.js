import React, { useState } from "react";
import { CUSTOMER_DATA, DEFAULT_URL, PRODUCT_DATA } from "../utility/constants";
import { DeleteTransactionsData } from "../utility/DeleteTransactionsData";

const Initialize = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const saveData = async (data, apiEndpoint) => {
    const fetchPromises = data.map((item) =>
      fetch(DEFAULT_URL + apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
    );

    try {
      const responses = await Promise.all(fetchPromises);
      const results = await Promise.all(
        responses.map((response) => response.json())
      );
      console.log("Saved:", results);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const initializeProductsAndCustomer = () => {
    try {
      saveData(PRODUCT_DATA, "products");
      saveData(CUSTOMER_DATA, "customers");
      DeleteTransactionsData(DEFAULT_URL+"transactions");
      setSuccessMessage("Products and Customer Initialized Successfully");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={initializeProductsAndCustomer}
        className="border border-red-600 border-solid m-32 p-4 bg-slate-400 text-white"
      >
        Initialize the Data
      </button>
      <p className="font-bold text-3xl text-red-800" on>
        {successMessage ? successMessage : errorMessage}
      </p>
    </div>
  );
};

export default Initialize;
