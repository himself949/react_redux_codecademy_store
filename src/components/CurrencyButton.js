import React from 'react';
import { setCurrency } from '../features/currencyFilter/currencyFilterSlice';

const CurrencyButton = ({ currencyFilter, currency, dispatch }) => {

    const onClickHandler = (currency) => {
        dispatch(setCurrency(currency))
    }

    return (
        <button
            className={`currency-button ${currencyFilter === currency && 'selected'
                }`}
            key={currency}
            onClick={() => onClickHandler(currency)}
        >
            {currency}
        </button>
    );
};

export default CurrencyButton;