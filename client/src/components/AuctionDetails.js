import React from 'react';

function AuctionDetails (props) {
  const {
    title = 'Empty Title',
    details,
    reserve_price,
    end_on,
    owner = {}
  } = props

  const {full_name} = owner
  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
      <p>{reserve_price}</p>
      <p>By {full_name}</p>
      <p>{end_on}</p>
    </div>
  );
}


export default AuctionDetails;
