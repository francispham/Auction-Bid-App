import React from 'react';

function BidDetails(props) {
  const { bid_price } = props;
  return (
    <div className="BidDetails">
      <p><strong>Bid:</strong>{bid_price}</p>
    </div>
  )
}

export default BidDetails;
