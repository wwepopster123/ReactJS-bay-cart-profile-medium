import { useContext, useEffect, useState } from "react";
import { AppContext } from "./../App";

export const CartProductCard = ({ id, count }) => {
  const { products, user, setUser } = useContext(AppContext);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    const foundProductInCart = user.cart.find(
      (fProduct) => fProduct.index === id
    );
    const foundProductInProducts = products.find(
      (fProduct) => fProduct.id === foundProductInCart.id
    );
    console.log(foundProductInCart);
    setCurrentProduct({
      img: foundProductInCart.img,
      name: foundProductInProducts.name,
      price: foundProductInProducts.price
    });
  }, [user.cart]);

  const handleRemove = () => {
    setUser({
      ...user,
      cart: user.cart.filter((product) => product.index !== id),
    });
    setCurrentProduct(null);
  };

  return (
    <>
      {currentProduct !== null ? (
        <div className="cart-card">
          <div className="cart-card-left">
            <img className="cart-card-img" src={currentProduct.img} />
          </div>
          <div className="cart-card-right">
            <div className="flex-between">
              <div>{currentProduct.name}</div>
              <div>
                <button
                  onClick={handleRemove}
                  type="button"
                  class="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
            <div>
              {currentProduct.price} x {count} = {currentProduct.price * count}$
            </div>
          </div>
        </div>
      ) : (
        <div>Not data</div>
      )}
    </>
  );
};
