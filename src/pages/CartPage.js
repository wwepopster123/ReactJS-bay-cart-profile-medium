import { useContext, useEffect, useState } from "react";
import { CartProductCard } from "../components/CartProductCard";
import { AppContext } from "./../App";

export const CartPage = () => {
  const { user, products, setUser, setAlertText, setAlertIsShow, setAlertIsDanger } = useContext(AppContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    var calcPrice = 0;

    user.cart.map((cProduct) => {
      const findInProducts = products.find(
        (fProduct) => fProduct.id === cProduct.id
      );
      calcPrice += findInProducts.price * cProduct.count;
    });

    setTotalPrice(calcPrice);
  }, [user.cart]);

  const handleBuy = () => {
    if (totalPrice <= 0) return;
    if (user.cash >= totalPrice) {
      setUser({ ...user, cash: user.cash - totalPrice, cart: [] });
      setAlertText("Done!");
      setAlertIsShow(true);
    }
    else {
      setAlertText("Not have cash(");
      setAlertIsDanger(true);
      setAlertIsShow(true);
    }
  };

  return (
    <div>
      {user !== null ? (
        <div className="cart-products">
          {user.cart.map((product, index) => {
            return (
              <CartProductCard
                key={index}
                id={product.index}
                count={product.count}
              />
            );
          })}
        </div>
      ) : (
        <div>Not data</div>
      )}

      <div className="flex total-price">
        <button onClick={handleBuy} type="button" class="btn btn-success">
          Buy
        </button>
        <div>Total: {totalPrice}$</div>
      </div>
    </div>
  );
};
