import React from 'react';

function StarRating(props) {
  const { max = 5, rating = 0 } = props;
  // const filledInStars = Array.from({ length: rating }).map((a,i) => (
  //   <Star key={i} style={{ height: '1.2em', color: 'gold' }} />
  // ));
  // const emptyStars = Array.from({ length: max - rating }).map((a,i) => (
  //   <Star key={i} style={{ height: '1.2em', color: 'lightgrey' }} />
  // ));
  return (
    <div className="StarRating">
      {/* filledInStars */}
      {/* emptyStars */}

      {Array.from({ length: max }).map((a, index) => (
        <Star
          key={index}
          style={{
            height: '1.2em',
            color: index < rating ? 'gold' : 'lightgrey'
          }}
        />
      ))}
    </div>
  );
}


// We can define another component here, called `Star`, and use it within our
// `StarRating` component. If we do not export it, it will be only available
// within this file.
function Star (props) {
  const { style = {}, ...restProps } = props;
  const { color ='black', ...restStyle } = style;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
      style={restStyle}
      viewBox='0 0 576 512'
    >
      <path
        fill={color}
        d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
      />
    </svg>
  );
}



export default StarRating;
