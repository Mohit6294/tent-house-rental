export const PRODUCT_DATA = [
  {
    product_title: "Plastic Chairs",
    quantity_total: 10000,
    quantity_booked: 0,
    price: 10,
  },
  {
    product_title: "Tiffany Chairs",
    quantity_total: 5000,
    quantity_booked: 0,
    price: 20,
  },
  {
    product_title: "Bridal Chairs",
    quantity_total: 10,
    quantity_booked: 0,
    price: 100,
  },
  {
    product_title: "Plastic Round Tables",
    quantity_total: 100,
    quantity_booked: 0,
    price: 500,
  },
  {
    product_title: "Steel Folding Table",
    quantity_total: 80,
    quantity_booked: 0,
    price: 900,
  },
];

export const CUSTOMER_DATA = [
  {
    "customer_name":"Mohit Kumar",
  },
  {
    "customer_name":"Aman Kumar",
  },
  {
    "customer_name":"Raman Kumar",
  },
  {
    "customer_name":"Naman Kumar",
  },
  {
    "customer_name":"Rohan Kumar",
  },
];


export const INITIALIZE_PRODUCT_OPTION = {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json' 
  },
  body: JSON.stringify(PRODUCT_DATA),
}

export const INITALIZE_CUSTOMER_OPTION = {
  method: 'post',
  headers:{
    'Content-Type':  'application/json',
  },
  body:JSON.stringify(CUSTOMER_DATA),
}



export const DEFAULT_URL = "http://localhost:8000/";