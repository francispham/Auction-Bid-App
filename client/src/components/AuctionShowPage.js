import React, {Component} from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import { Auction, Bid } from '../lib/requests';
import BidForm from './BidForm';

class AuctionShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      auction: {},
      bids: []
    };
    this.createBid = this.createBid.bind(this)
  }

  componentDidMount () {
    const auctionId = this.props.match.params.id;

    Auction
      .one(auctionId)
      .then(
        data => {
          this.setState({
            auction: data.auction,
            bids: data.bids
          })
        }
      )
  }

  createBid (params) {
    const auctionId = this.props.match.params.id;
    Bid
      .create(params, auctionId)
      .then (data => {
        const { auctionId } = data;
        return Auction.one(auctionId)
      })
      .then(data => {
        this.setState({
          auction: data.auction,
          bids: data.bids
        })
      });
  }


  render() {
    const {...auction} = this.state.auction;
    const {bids} = this.state;
    // console.log(this.state.bids)

    return (<div>
      <AuctionDetails {...auction}/>
      <h2>Add Bid</h2>
      <BidForm
        onSubmit={this.createBid}
      />
      <h2>Bids</h2>
      <BidList
        bids={bids}
      />
    </div>)

  }
}
export default AuctionShowPage;
