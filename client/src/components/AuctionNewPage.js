import React, { Component } from 'react';
import AuctionForm from './AuctionForm';
import { Auction } from '../lib/requests';

class AuctionNewPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      validationErrors: []
    };

    this.createAuction = this.createAuction.bind(this);
  }

  createAuction (auctionParams) {
    Auction
      .create(auctionParams)
      .then (data => {
          const {id} =data;
          this.props.history.push(`/auctions/${id}`);
        })
  }

  render () {
    return (
      <main
        className="AuctionNewPage"
        style={{margin: '0 1rem'}}
      >
        <h1>Create New Auction</h1>
        <AuctionForm
          onSubmit={this.createAuction}
        />
      </main>
    );
  }
}

export default AuctionNewPage;
