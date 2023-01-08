import { ProductBuyCard as ProductBuyCard } from "../components/ProductBuyCard";
import { useContext } from "react";
import { AppContext } from "./../App";

export const ProductsPage = () => {
  const { products } = useContext(AppContext);

  return (
    <div>
      <div className="line-products">
        {products.map((item) => (
          <ProductBuyCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
