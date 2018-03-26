import React from 'react';
import ReviewDetails from './ReviewDetails';

function  ReviewList(props) {
  const {
    reviews = [],
    onReviewDeleteClick = () =>{}
  } = props;
  return reviews.map(
    (review, i) => <ReviewDetails
      key = {i} {...review}
      //Same as:  ReviewDetails({key: i, ...review})
      onDeleteClick = {onReviewDeleteClick}
    />);
}

export default ReviewList;
