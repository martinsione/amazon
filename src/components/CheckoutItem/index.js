import "./index.css";
import Button from "../Button";
import { useStateValue } from "../../context/StateProvider.js";

function CheckoutItem({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutItem">
      <img alt="" className="checkoutItem__image" src={image} />
      <div className="checkoutItem__info">
        <p className="checkoutItem__title">{title}</p>
        <p className="checkoutItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <Button onClick={removeFromBasket}>Remove from basket</Button>
      </div>
    </div>
  );
}

export default CheckoutItem;
