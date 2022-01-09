import React, { useEffect, useState } from "react";
import axios from "axios";
import setupMockServer from "../api/mockserver";
const ProductListing = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setProducts(response.data.users);
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);
  console.log("product");
  return (
    
    <div  className="mt-6 bg-yellow-600 ">mt-6
     <h1 className="text-black-600">Product Listing</h1>   
      </div>
   
  );
};

export default ProductListing;
