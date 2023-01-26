import { useContext } from "react";
import { ProductConext } from "../contexts/product.context";

import ProductCard from "../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductConext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
