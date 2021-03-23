import "./index.css";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import swal from "sweetalert";
import CheckoutItem from "../CheckoutItem";
import NumberFormat from "react-number-format";
import Button from "../Button";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handlePurchease = () =>
    swal("Oops!", "Sorry, our system is down. \nTry again later", "error");
  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Adrees</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>123 React Street</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>

          <div className="payment__details">
            <label>Credit card: </label>
            <input type="text" />
          </div>
          <div className="payment__info">
            <NumberFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <Button onClick={handlePurchease}>Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
