import React, { useState } from "react";

export function Form() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  function submitHandler(event) {
    event.preventDefault();
    const obj = {
      title,
      price,
      description,
      category,
      image,
    };
    console.log(obj);
    setDescription();
    setPrice();
    setTitle();
    setImage();
    setCategory();
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(event) => setTitle(event.target.value)}
          placeholder="title"
        />
        <input
          onChange={(event) => setPrice(event.target.value)}
          placeholder="price"
        />
        <input
          onChange={(event) => setDescription(event.target.value)}
          placeholder="description"
        />
        <input
          onChange={(event) => setCategory(event.target.value)}
          placeholder="category"
        />
        <input
          onChange={(event) => setImage(event.target.value)}
          placeholder="image url"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
