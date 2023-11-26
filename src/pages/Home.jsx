import React, { useState, useEffect } from "react";
import ProductCard from "../components/Products/ProductCard";

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

  // return products fara style in card
  //   return products ? (
  //     <div>
  //       {products.map((product) => (
  //         <div key={product.id}>
  //           {product.name}
  //           <div />
  //         </div>
  //       ))}
  //     </div>
  //   ) : (
  //     <div>Loading ...</div>
  //   );

  return products ? (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Home;
