import React from 'react';

function BidDetails (props) {

  const style = {
    borderLeft: 'medium solid black',
    padding: '0 0.75em'
  };

  const {
    id,
    bid_price,
    auction_id
    // bidder_full_name,
    // onDeleteClick = () => {}
    } = props;



  return (
    <div
      className="BidDetails"
      style={style}
    >
      <p><strong>Bid:</strong> {bid_price}</p>
      {/* <p>
        <strong>Bider: </strong>{props.bidder_full_name}
        <button
          onClick={
            () => onDeleteClick(props.id
            )}> Delete
        </button>
      </p> */}
    </div>
  )
}

export default BidDetails;
