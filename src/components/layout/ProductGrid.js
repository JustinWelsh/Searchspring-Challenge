import React from "react";
import { useUserContext } from "../../services/context/UserContext";
import ProductCard from "../ui/ProductCard";

export const ProductGrid = () => {
  const { products } = useUserContext();

  return (
    <div className="max-w-[1200px] 2xl:max-w-[1700px] py-5 px-10 gap-10 justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
