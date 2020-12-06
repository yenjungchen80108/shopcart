import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateProduct extends Component {
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
    // this.onChangeSku = this.onChangeSku.bind(this);
    // this.onChangeOptionDisplayName = this.onChangeOptionDisplayName.bind(this);
    // this.onChangeLabel = this.onChangeLabel.bind(this);

    this.state = {
      shopName: '',
      name: '',
      price: 0,
      weight: 0,
      type: '',
      categories: [],
      imageUrl: '',
      variants: [],
      // sku: '',
      // optionValues: {},
      // optionDisplayName: '',
      // label: ''
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
    .then(res => {
      if (res.data.length > 0) {
        this.setState({
          shopName: res.data[0].shopName,
          name: res.data[0].name,
          price: res.data[0].price,
          weight: res.data[0].weight,
          type: res.data[0].type,
          categories: res.data[0].categories,
          imageUrl: res.data[0].imageUrl,
          variants: res.data[0].variants,
          // sku: res.data[0].variants[0].sku,
          // optionValues: res.data[0].variants[0].option_values,
          // optionDisplayName: res.data[0].variants[0].option_values.option_display_name,
          // label: res.data[0].variants[0].option_values.label
        })
      }
    })
    .catch((error) => {
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
  /*
  onChangeSku(e) {
    this.setState({
      variants: e.target.value,
      sku: e.target.value,
    });
  }

  onChangeOptionDisplayName(e) {
    this.setState({
      variants: e.target.value,
      optionValues: e.target.value,
      optionDisplayName: e.target.value,
    });
  }

  onChangeLabel(e) {
    this.setState({
      variants: e.target.value,
      optionValues: e.target.value,
      label: e.target.value,
    });
  }
*/
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
      imageUrl: this.state.imageUrl,
      variants: this.state.variants,
      // sku: this.state.sku,
      // optionValues: this.state.optionValues,
      // optionDisplayName: this.state.optionDisplayName,
      // label: this.state.label
    };
    console.log(product);
    // window.location = "/edit";
    axios.post('http://localhost:5000/products', product)
        .then(res => console.log(res.data));
    window.location = '/product';
  };

  render() {
    return (
        <div>
          <h3>Create Product</h3>
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
            {/* <div className="form-group"> 
              <label>SKU: </label>
              <input type="text" required className="form-control" 
              value={this.state.sku} onChange={this.onChangeSku} />
            </div>
            <div className="form-group"> 
              <label>Option Display Name: </label>
              <input type="text" required className="form-control" 
              value={this.state.optionDisplayName} onChange={this.onChangeOptionDisplayName} />
            </div>
            <div className="form-group"> 
              <label>Label: </label>
              <input type="text" required className="form-control" 
              value={this.state.label} onChange={this.onChangeLabel} />
            </div> */}
    
            <div className="form-group">
              <input type="submit" value="Create Product" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
  }
}