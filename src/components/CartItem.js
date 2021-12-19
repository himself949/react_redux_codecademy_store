import React from 'react';
import { changeItemQuantity } from '../features/cart/cartSlice';

const CartItem = ({ name, cart, dispatch }) => {

    const item = cart[name];

    const onInputChangeHandler = (name, input) => {
        if (input === '') {
            return;
        }
        const newQuantity = Number(input);
        dispatch(changeItemQuantity(name, newQuantity))
    }

    if (item.quantity === 0) {
        return;
    }

    return (
        <li key={name}>
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
        </li>
    );
};

export default CartItem;