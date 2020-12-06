import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Register from "./components/register";
import ProductsList from "./components/products-list";
import EditProduct from "./components/edit-product";
import CreateProduct from "./components/create-product";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route path="/register" exact component = { Register } />
      <Route path="/editproduct/:id" exact component = { EditProduct } />
      <Route path="/product" exact component = { ProductsList } />
      <Route path="/createproduct" exact component = { CreateProduct } />
      </div>
    </Router>
  );
}

export default App;
