import React from 'react';

function BidForm(props) {

  const {onSubmit = () => {}} = props
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit({
      bid_price: formData.get('bid_price'),
    });
  }
  return (
    <form
      className="BidForm"
      onSubmit={handleSubmit}
    >

        <div>
          <label htmlFor="bid_price">Bid</label> <br />
          <input type="integer" name="bid_price" id="bid_price" />
        </div>


        <div>
          <input type="submit" value="Bid"/>
        </div>

    </form>
    )
}

export default BidForm;
