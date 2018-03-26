import React from 'react';
// import Field from './Field';
// When creating a react component, make sure to use
// CapitalizedCamelCase. React interprets lower
// components as HTML tags and will try to render as such
// ignoring your component.
function ProductDetails (props) {
  const {
    title = 'Empty Title',
    description,
    price,
    created_at,
    seller = {}
  } = props

  const {full_name} = seller
  // To write JavaScript expression inside of JSX,
  // use {} like the {props.title} below.
  // The expression must return:
  // - A string
  // - Or, a number
  // - Or, null/undefined
  // - Or, a React element
  // - Or, an array of React elements
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>By {full_name}</p>
      <p>{created_at}</p>
    </div>
  );
}


export default ProductDetails;
