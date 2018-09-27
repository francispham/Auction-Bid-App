import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Auction} from '../lib/requests';

class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auctions: []
    };
    this.deleteAuction = this.deleteAuction.bind(this)
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      this.setState({auctions: auctions})
    })
  }

  deleteAuction(event) {
    event.preventDefault();
    const auctionId = parseInt(event.currentTarget.dataset.auctionId, 10);
    console.log(auctionId)
    const newAuctions = this.state.auctions.filter(auction => auction.id !== auctionId);
    Auction.destroy(auctionId).then(auctions => {
      this.setState({auctions: newAuctions});
  });
}

  render() {
    return (<div>
      <h2>Auctions</h2>
      <ul className="auctions-list">
        {
          this.state.auctions.map(auction => {
            return (<li key={auction.id}>
              <Link to={`/auctions/${auction.id}`}>
                {auction.title}
              </Link>

              <strong>Seller:</strong>{' '}

              {/* <em>{auction.seller.full_name}</em> */}
              <button data-auction-id={auction.id} onClick={this.deleteAuction}>Delete
              </button>
            </li>);
          })
        }
      </ul>
    </div>)
  }
}

export default AuctionIndexPage;
