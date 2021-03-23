import "./index.css";
import Button from "../Button";
import { useStateValue } from "../../context/StateProvider.js";

function Product({ id, image, price, rating, title }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img alt={title} src={image} />
      <Button onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
}

export default Product;
