import React from 'react';
import StarRating from './StarRating';

function ReviewDetails (props) {

  // 1em is equal to the font size of the parent tag.
  const style = {
    borderLeft: 'medium solid black',
    padding: '0 0.75em'
  };

  const {
    id,
    body,
    rating,
    created_at,
    reviewer_full_name,
    // reviewer = {},
    onDeleteClick = () => {}
    } = props;

  // const {full_name} = reviewer;


  return (
    <div
      className="ReviewDetails"
      style={style}
    >
      {/* <p>Rating: {rating}</p> */}
      <StarRating max={5} rating = {rating}/>
      <p><strong>Review:</strong> {body}</p>
      <p>
        <strong>Reviewer: </strong>{props.reviewer_full_name}
        <button
          onClick={
            () => onDeleteClick(props.id
            )}> Delete
        </button>
      </p>
      <p>{created_at}</p>


    </div>
    // <div></div>
    // You can't return multiple React elements at once.
    // If you want to return, they must nested inside
    // a single React element.
  )
}

export default ReviewDetails;
