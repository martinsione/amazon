import NumberFormat from "react-number-format";
import "./index.css";
import Button from "../Button";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const handlePayment = () => {
    if (user) {
      history.push("/payment");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="subtotal">
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {basket.length > 0 ? (
        <Button onClick={handlePayment}>Proceed to checkout</Button>
      ) : (
        <Button disabled="disabled">Proceed to checkout</Button>
      )}
    </div>
  );
}

export default Subtotal;
