import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Header from "../Header";
import Home from "../Home";
import Checkout from "../Checkout";
import Login from "../Login";
import Payment from "../Payment";
import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { useStateValue } from "../../context/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is ", authUser);
      if (authUser) {
        // user was logged in / just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
