import "./index.css";
import Subtotal from "../Subtotal";
import CheckoutItem from "../CheckoutItem";
import { useStateValue } from "../../context/StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const userName = user?.email.substring(0, user?.email.lastIndexOf("@"));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt=""
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          {user && <h4>Have a happy day, {userName}</h4>}
          <h2 className="checkout__title">Your shopping Basket</h2>
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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
