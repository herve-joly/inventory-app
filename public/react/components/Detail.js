import React from "react";

export function Detail(props) {
  const { item, setDetail, deleteItem } = props;

  const handleDelete = async () => {
    await deleteItem(item.id);
    setDetail(undefined);
  };

  return (
    // Single Item View
    <>
      <h3>{item.title}</h3>
      <h4>Price: {item.price}</h4>
      <h4>Description: {item.description}</h4>
      <h4>Category: {item.category}</h4>
      <img src={item.image} alt={item.title} />
      <button onClick={() => setDetail()}>Back to Items Store</button>
      <button onClick={handleDelete}>Delete Item</button>
    </>
  );
}
