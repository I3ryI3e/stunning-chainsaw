import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import {auth} from "./firebase";
import {useStateValue} from "./components/StateProvider";
import Payment from "./components/Payment";
import { Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js/pure";

const promise = loadStripe(
    "pk_test_51HTYlQGGv3BJQketP8J1svbFzrUxZThfyJh9lmrTxnHI99snzgQtDWQLzWqoml1qBqpIX1phz92JKm6wu5VS84B700SBpm9b7F"
);

function App() {

    const [state,dispatch] = useStateValue();
    useEffect( () =>{
        auth.onAuthStateChanged(authUser => {
            if(authUser){
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })

            }else{
                dispatch({
                    type: "SET_USER",
                    user: null
                })

            }
        })
    },[]);

  return (
      <Router>
          <div className="app">
              <Switch>
                  <Route path={"/payment"}>
                      <Header/>
                      <Elements stripe={promise}>
                          <Payment/>
                      </Elements>
                  </Route>
                  <Route path="/login">
                      <Login/>
                  </Route>
                  <Route path="/checkout" >
                      <Header/>
                      <Checkout/>
                  </Route>
                  <Route path="/" >
                      <Header/>
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
