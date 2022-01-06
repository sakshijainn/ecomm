import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Cart from "./components/Cart";
import WishList from "./components/WishList";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";

export default function App() {
  return (
    <div className=" w-full h-screen">
   <Router>
   <Header />
           <Switch>
          <Route path ="/" exact  component ={ProductListing}/>
          <Route path="/login" component={Auth} />
          <Route path="/cart" component={Cart} />
          <Route path="/wishlist" component={WishList} /> 
         
          </Switch>
          
        </Router>
    </div>
  )
}
