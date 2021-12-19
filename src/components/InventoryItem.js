import React from 'react';
import { addItem } from '../features/cart/cartSlice';
import { calculatePrice, getCurrencySymbol } from '../helpers/helpers';

const InventoryItem = ({ item, currencyFilter, dispatch }) => {

  const { price, name, img } = item;
  const displayPrice = calculatePrice(price, currencyFilter);

  const onClickHandler = (item) => {
    dispatch(addItem(item))
  }

  return (
    <li key={name} className="item">
      <img src={img} alt={''} />
      <h3>{name}</h3>
      <h3 className="price">
        {getCurrencySymbol(currencyFilter)}
        {displayPrice.toFixed(2)} {currencyFilter}
      </h3>
      <button
        onClick={() => onClickHandler(item)}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </li>
  );
};

export default InventoryItem;