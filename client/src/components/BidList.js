import React from 'react';
import BidDetails from './BidDetails';

function  BidList(props) {
  const { bids = [] } = props;
  return bids.map( (bid, i) => <BidDetails key = {i} {...bid}/> );
}

export default BidList;
