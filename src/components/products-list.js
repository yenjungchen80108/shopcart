import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { BsFillPlusCircleFill } from "react-icons/bs";

const Product = props => (
    <tr>
      <td>{props.product.shopName}</td>
      <td>{props.product.name}</td>
      {/* <td>{props.product.variants[0].option_values.label}</td> */}
      <td>{props.product.price}</td>
      <td>
      <Button variant="contained">
        <Link to={"/editproduct/"+props.product._id}>edit</Link>
      </Button>
      &nbsp;
      <Button variant="contained">
        <a href="#/" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
      </Button>
      </td>
    </tr>
  )

  export default class ProductsList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteProduct = this.deleteProduct.bind(this)
      this.state = {products: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/products/')
        .then(response => {
          this.setState({ products: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    deleteProduct(id) {
      axios.delete('http://localhost:5000/products/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        products: this.state.products.filter(el => el._id !== id)
      })
    }
  
    productList() {
      return this.state.products.map(currentproduct => {
        return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
      })
    }
  
    render() {
      return (
        <div>
          <h3>Product List</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>ShopName</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                <th><Link to={"/createproduct"}><BsFillPlusCircleFill /></Link></th>
              </tr>
            </thead>
            <tbody>
              { this.productList() }
            </tbody>
          </table>
        </div>
      )
    }
  }