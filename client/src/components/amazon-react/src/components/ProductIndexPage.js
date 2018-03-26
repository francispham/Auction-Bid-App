import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import productsData from '../data/products';
import {Product} from '../data/requests'

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
    this.deleteProduct = this.deleteProduct.bind(this)
    
  }

  componentDidMount () {
    Product
      .all()
      .then(
        products => {
          this.setState({
            products: products
          })
        }
      )
  }

  deleteProduct(event) {
    event.preventDefault();
    const productId = parseInt(event.currentTarget.dataset.productId, 10);
    console.log(productId)
    const newProducts = this.state.products.filter(
      product => product.id !== productId
    );
    this.setState({
      products: newProducts
    });
  }

  render() {
    // console.log(this.state.products);
    return (<div>
      <h2>Products</h2>
      <ul className="products-list">
        {
          this.state.products.map(product => {
            return (<li key={product.id}>
              <Link to={`/products/${product.id}`}>
                {product.title}
              </Link>
              {/* <a href="">{product.title}</a><br /> */}
              <strong>Seller:</strong>{' '}

              {/*
                The {' '} just ensures that there is a space put in the dom in
                between the bolded `Seller:` and the italicized seller
                full_name
              */
              }
              <em>{product.seller.full_name}</em>
              <button
                data-product-id={product.id}
                onClick = {this.deleteProduct}>Delete
              </button>
            </li>);
          })
        }
      </ul>
    </div>)
  }
}

export default ProductIndexPage;
