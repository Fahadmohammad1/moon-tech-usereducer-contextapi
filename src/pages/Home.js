import React from "react";
// import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { data } = useProducts();
  // console.log(data);
  return (
    <div>
      <h1>this is home</h1>
    </div>
  );
};

export default Home;
