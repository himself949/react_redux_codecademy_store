import React from 'react';

const InventoryItem = ({ item }) => {

    const { price, name, img } = item;
    //const displayPrice = calculatePrice(price, currencyFilter);

    return (
        <li key={name} className="item">
            <img src={img} alt={''} />
            <h3>{name}</h3>

        </li>
    );
};

export default InventoryItem;

/*
 <h3 className="price">
              {getCurrencySymbol(currencyFilter)}
              {displayPrice.toFixed(2)} {currencyFilter}
            </h3>
            <button
              onClick={() => onClickHandler(inventoryItem)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
*/