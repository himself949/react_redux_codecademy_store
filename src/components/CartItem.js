import React from 'react';

const CartItem = ({ name, cart }) => {

    const item = cart[name];

    if (item.quantity === 0) {
        return;
    }

    return (
        <li key={name}>
            <p>test</p>

        </li>
    );
};

export default CartItem;

/*
            <p>{name}</p>
            <select
                className="item-quantity"
                value={item.quantity}
                onChange={(e) => {
                    onInputChangeHandler(name, e.target.value);
                }}
            >
                {[...Array(100).keys()].map((_, index) => (
                    <option key={index} value={index}>
                        {index}
                    </option>
                ))}
            </select>

*/