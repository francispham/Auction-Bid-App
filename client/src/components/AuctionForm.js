import React from 'react';

function AuctionForm(props) {

  const {onSubmit = () => {}} = props
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit({
      title: formData.get('title'),
      reserve_price: formData.get('reserve_price'),
      details: formData.get('details')
    });
  }
  return (
    <form
      className="AuctionForm"
      onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title">Title</label> <br />
          <input name="title" id="title" />
        </div>

        <div>
          <label htmlFor="details">Details</label> <br />
          <textarea name="details" id="details" cols="60" rows="4" />
        </div>

        <div>
          <label htmlFor="ends_on">Ends On</label> <br />
          <input type="date" name="ends_on" id="ends_on" />
        </div>

        <div>
          <label htmlFor="reserve_price">Reserver Price</label> <br />
          <input name="reserve_price" id="reserve_price" />
        </div>

        <div>
          <input type="submit" value="Save"/>
        </div>
      </form>
    )
}

export default AuctionForm;
