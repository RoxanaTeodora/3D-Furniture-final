import React, { useState, useEffect } from "react";
import ProductCard from "../components/Products/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  //filteredProducts valoarea curentă a stării
  //setFilteredProducts funcție pentru a o actualiza

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts"
      );
      const products = await response.json();
      // console.log(products);
      setProducts(products);
      setFilteredProducts(products);
    };

    fetchProducts();
  }, []);

  const onChangeFilterPrice = (e, startPrice, endPrice) => {
    if (e.target.checked) {
      filterProductsByPrice(startPrice, endPrice);
    } else {
      setFilteredProducts(products);
    }
  };

  const filterProductsByPrice = (startPrice, endPrice) => {
    const filteredProductsByPrice = products.filter(
      (product) => product.price >= startPrice && product.price <= endPrice
    );
    setFilteredProducts(filteredProductsByPrice);
    //useState
  };

  return filteredProducts ? (
    // <ProductsConainter products={products} />
    <div>
      <div className="flex gap-4 p-5 text-center text-2xl place-content-center ">
        <div>
          <input
            className="h-6 w-6"
            type="checkbox"
            id="filter1"
            onChange={(e) => onChangeFilterPrice(e, 0, 499)}
          />
          <label htmlFor="filter1"> 0 - 499 RON</label>
        </div>
        <div>
          <input
            className="h-6 w-6"
            type="checkbox"
            id="filter2"
            onChange={(e) => onChangeFilterPrice(e, 500, Infinity)}
          />
          <label htmlFor="filter2"> more than 500 </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

//   return products ? (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {products.map((product) => (
//         <div key={product.id}>
//           <ProductCard product={product} />
//         </div>
//       ))}
//     </div>
//   ) : (
//     <div>Loading ...</div>
//   );
// };

export default Home;
