import React from 'react';
import BidDetails from './BidDetails';

function  BidList(props) {
  const {
    bids = [],
    // onBidDeleteClick = () =>{}
  } = props;
  return bids.map(
    (bid, i) => <BidDetails
      key = {i} {...bid}
      //Same as:  BidDetails({key: i, ...bid})
      // onDeleteClick = {onBidDeleteClick}
    />);
}

export default BidList;
