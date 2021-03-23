import NumberFormat from "react-number-format";
import "./index.css";
import Button from "../Button";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

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

      <Button>Proceed to checkout</Button>
    </div>
  );
}

export default Subtotal;
