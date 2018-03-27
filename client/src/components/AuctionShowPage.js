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
      auction: {}
    }
  }

  componentDidMount () {
    const auctionId = this.props.match.params.id;

    Auction
      .one(auctionId)
      .then(
        auction => {
          this.setState({
            auction: auction
          })
        }
      )
  }

  createBid (bidParams) {
    Bid
      .create(bidParams)
      .then (data => {
          const { id, auctionId } =data;
          this.props.history.push(`/auctions/${auctionId}`);
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
      />
    </div>)

  }
}
export default AuctionShowPage;
