import React from "react";

export function Detail(props) {
  const { item, setDetail, deleteItem } = props;

  const handleDelete = async () => {
    await deleteItem(item.id);
    setDetail(undefined);
  };

  return (
    // Single Item View
    <article>
      <>
        <h3>{item.title}</h3>
        <img class="singleItemIMG" src={item.image} alt={item.title} />
        <h4>
          <span class="desSpan">Price:</span> £{item.price}
        </h4>
        <h4>
          <span class="desSpan">Description:</span> {item.description}
        </h4>
        <h4>
          <span class="desSpan">Category:</span> {item.category}
        </h4>
        <div class="buttonDiv">
          <button onClick={() => setDetail()}>Back to Items Store</button>
          <button onClick={handleDelete}>Delete Item</button>
        </div>
      </>
    </article>
  );
}
