import React from 'react';
import CartItem from '../../components/CartItem';
import { calculateTotal, getCurrencySymbol } from '../../helpers/helpers';

const Cart = ({ cart, currencyFilter, dispatch }) => {

    const cartElements = Object.keys(cart).map((item) => <CartItem name={item} cart={cart} dispatch={dispatch} />)
    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id="cart-items">{cartElements}</ul>
            <h3 className="total">
                Total{' '}
                <span className="total-value">
                    {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
                </span>
            </h3>
        </div>
    );
};

export default Cart;