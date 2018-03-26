import React, {Component} from 'react';
import AuctionDetails from './AuctionDetails';
// import ReviewList from './ReviewList';
// import ReviewDetails from './ReviewDetails';
import {Auction} from '../lib/requests';

class AuctionShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true
    }
    // this.delete = this.delete.bind(this);
    // this.deleteReview = this.deleteReview.bind(this);
  }

  componentDidMount () {
    const productId = this.props.match.params.id;

    Auction
      .one(productId)
      .then(
        product => {
          this.setState({
            product: product,
            loading: false
          })
        }
      )
  }
  // delete() {
  //   this.setState({
  //     product: {}
  //   });
  // }

  // deleteReview (reviewId) {
  //   const {product} = this.state;
  //   const {reviews} = product;
  //
  //   this.setState({
  //     product: {
  //       ...product,
  //       reviews: reviews.filter(review => review.id !== reviewId)
  //     }
  //   })
  // }

  render() {
    const {
      reviews,
      ...product
    } = this.state.product;


    return (<div>
      <AuctionDetails {...product}/>
      {/* <h2>Reviews</h2>
      <ReviewList
        reviews={reviews}
        onReviewDeleteClick = {this.deleteReview}
      /> */}
    </div>)

  }
}
export default AuctionShowPage;
