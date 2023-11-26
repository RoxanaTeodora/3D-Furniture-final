import React, { useState, useEffect } from "react";
// import ProductCard from "../components/Products/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts"
      );
      const products = await response.json();
      console.log(products);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return products ? (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <div />
        </div>
      ))}
    </div>
  ) : (
    <div>Loading ...</div>
  );
  // return <div>Home</div>;
};

export default Home;

//v1
// export default Home;

// import React, {useState} from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
