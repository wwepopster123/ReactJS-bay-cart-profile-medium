import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ProductBuyCard = (props) => {
  const [count, setCount] = useState(0);
  const { addProduct, setAlertIsShow, setAlertText, generateID } = useContext(AppContext);

  return (
    <div className="product-card">
      <div className="product-card-price">
        {count <= 0 ? props.product.price : props.product.price * count}$
      </div>
      <div className="product-card-img">
        <img src={props.product.img} />
      </div>
      <div className="product-card-title">{props.product.name}</div>
      <div className="product-card-description">
        {props.product.description}
      </div>
      <div className="product-card-actions flex">
        <button
          onClick={() => {
            if (count <= 0) return;
            addProduct({ id: props.product.id, count: count, index: generateID, img: props.product.img });
            setCount(0);
            setAlertText(
              "You buy " +
                props.product.name +
                " count: " +
                count +
                " cash - " +
                props.product.price * count + "$"
            );
            setAlertIsShow(true);
          }}
          type="button"
          className="btn btn-success"
        >
          buy
        </button>
        <button
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
          type="button"
          className="btn btn-danger"
        >
          -
        </button>
        <input
          value={count}
          className="form-control"
          type="number"
          placeholder="0"
          aria-label="default input example"
          readOnly={true}
        ></input>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          type="button"
          className="btn btn-success"
        >
          +
        </button>
      </div>
    </div>
  );
};
