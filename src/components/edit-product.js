import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    // binding this to each of the methods
    this.onChangeShopName = this.onChangeShopName.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCategories = this.onChangeCategories.bind(this);
    this.onChangeImageUrl = this.onChangeImageUrl.bind(this);

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      shopName: '',
      name: '',
      price: 0,
      weight: 0,
      type: '',
      categories: [],
      imageUrl: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/'+this.props.match.params.id)
    .then(response => {
        this.setState({
            shopName: response.data.shopName,
            name: response.data.name,
            price: response.data.price,
            weight: response.data.weight,
            type: response.data.type,
            categories: response.data.categories,
            imageUrl: response.data.imageUrl
        })
    })
    .catch(function (error){
        console.log(error);
    })
  }

  onChangeShopName(e) {
    this.setState({
      shopName: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value,
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  onChangeCategories(e) {
    this.setState({
      categories: e.target.value,
    });
  }

  onChangeImageUrl(e) {
    this.setState({
      imageUrl: e.target.value,
    });
  }

  onSubmit = (e) => {
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();

    const product = {
      shopName: this.state.shopName,
      name: this.state.name,
      price: this.state.price,
      weight: this.state.weight,
      type: this.state.type,
      categories: this.state.categories,
      imageUrl: this.state.imageUrl
    };
    console.log(product);
    // window.location = "/edit";
    axios.post('http://localhost:5000/products/'+this.props.match.params.id, product)
        .then(res => console.log(res.data));
    window.location = "/product";
  };

  render() {
    return (
        <div>
          <h3>Edit Product</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Shop Name: </label>
              <input type="text" required className="form-control" 
              value={this.state.shopName} onChange={this.onChangeShopName} />
            </div>
            <div className="form-group"> 
              <label>Name: </label>
              <input type="text" required className="form-control" 
              value={this.state.name} onChange={this.onChangeName} />
            </div>
            <div className="form-group"> 
              <label>Price: </label>
              <input type="text" required className="form-control" 
              value={this.state.price} onChange={this.onChangePrice} />
            </div>
            <div className="form-group"> 
              <label>Weight: </label>
              <input type="text" required className="form-control" 
              value={this.state.weight} onChange={this.onChangeWeight} />
            </div>
            <div className="form-group"> 
              <label>Type: </label>
              <input type="text" required className="form-control" 
              value={this.state.type} onChange={this.onChangeType} />
            </div>
            <div className="form-group"> 
              <label>Categories: </label>
              <input type="text" required className="form-control" 
              value={this.state.categories} onChange={this.onChangeCategories} />
            </div>
            <div className="form-group"> 
              <label>ImageUrl: </label>
              <input type="text" required className="form-control" 
              value={this.state.imageUrl} onChange={this.onChangeImageUrl} />
            </div>
    
            <div className="form-group">
              <input type="submit" value="Edit Product" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
  }
}