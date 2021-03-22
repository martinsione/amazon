import "./index.css";

function Product({ id, image, price, rating, title }) {
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
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
