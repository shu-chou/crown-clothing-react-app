import { useState } from "react";
import { createContext } from "react";

import PRODUCTS from "../resources/shop-data.json";

export const ProductConext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductConext.Provider value={value}>{children}</ProductConext.Provider>
  );
};
