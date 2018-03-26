import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { Product } from '../data/requests';

class ProductNewPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      validationErrors: []
    };

    this.createProduct = this.createProduct.bind(this);
  }

  createProduct (productParams) {
    Product
      .create(productParams)
      .then (data => {
        if (data.errors) {
          console.log(data.errors)
          this.setState({
            validationErrors: data
              .errors
              .filter(
                e => e.type === "ActiveRecord::RecordInvalid"
              )
          });
        } else {
          const {id} =data;
          this.props.history.push(`/questions/${id}`);
        }
      })
  }

  render () {
    return (
      <main
        className="ProductNewPage"
        style={{margin: '0 1rem'}}
      >
        <h1>New Product</h1>
        <ProductForm
          errors = {this.state.validationErrors}
          onSubmit={this.createProduct}
        />
      </main>
    );
  }
}

export default ProductNewPage;
