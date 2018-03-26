import React from 'react';
import FormErrors from './FormErrors';

function ProductForm(props) {
  // We are defining the `onSubmit` variable to have the value of the
  // onSubmit prop, via `onSubmit = props.onSubmit`
  // If `props.onSubmit` is undefined, then onSubmit becomes the
  // `emptyFunction`, () => {}
  // This is necessary because if `onSubmit` is undefined nad you try to call
  // it as a function `onSubmit()`, then the app will throw an error and crash
  // However, if it has the value of an empty function, then it won't throw an
  // error when it is called as a function (instead, it executes and does
  // nothing)
  const {errors = [],onSubmit = () => {}} = props
  // Another way of writing the same thing
  // function emptyFunction() {}
  // const onSubmit = props.onSubmit || emptyFunction;
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // See key => values from formData object
    // console.log(
    //   Array.from(formData.entries())
    // )
    onSubmit({
      title: formData.get('title'),
      price: formData.get('price'),
      description: formData.get('description')
    });
  }
  return (
    <form
      className="ProductForm"
      onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title">Title</label> <br />
          <input name="title" id="title" />
          <FormErrors forField="title" errors={errors} />
        </div>

        <div>
          <label htmlFor="price">Price</label> <br />
          <input name="price" id="price" />
          <FormErrors forField="price" errors={errors} />
        </div>

        <div>
          <label htmlFor="description">Descrition</label> <br />
          <textarea name="description" id="description" cols="60" rows="4" />
          <FormErrors forField="description" errors={errors} />
        </div>

        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    )
}




export default ProductForm;
