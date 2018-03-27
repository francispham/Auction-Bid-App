import React, {Component} from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import BidDetails from './BidDetails';
import { Auction, Bid } from '../lib/requests';
import BidForm from './BidForm';


class AuctionShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auction: {},
      loading: true
    }
    // this.delete = this.delete.bind(this);
    // this.deleteBid = this.deleteBid.bind(this);
  }

  componentDidMount () {
    const auctionId = this.props.match.params.id;

    Auction
      .one(auctionId)
      .then(
        auction => {
          this.setState({
            auction: auction,
            loading: false
          })
        }
      )
  }
  // delete() {
  //   this.setState({
  //     auction: {}
  //   });
  // }

  // deleteBid (bidId) {
  //   const {auction} = this.state;
  //   const {bids} = auction;
  //
  //   this.setState({
  //     auction: {
  //       ...auction,
  //       bids: bids.filter(bid => bid.id !== bidId)
  //     }
  //   })
  // }

  createBid (bidParams) {
    Bid
      .create(bidParams)
      .then (data => {
          const {id} =data;
          this.props.history.push(`/auctions/${id}`);
        })
  }

  render() {
    const {
      bids,
      ...auction
    } = this.state.auction;


    return (<div>
      <AuctionDetails {...auction}/>
      <h2>Add Bid</h2>
      <BidForm
        onSubmit={this.createBid}
      />
      <h2>Bids</h2>
      <BidList
        bids={bids}
        // onBidDeleteClick = {this.deleteBid}
      />
    </div>)

  }
}
export default AuctionShowPage;
