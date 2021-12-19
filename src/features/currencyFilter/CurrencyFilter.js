import React from 'react';
import { currenciesData } from '../../data.js'
import CurrencyButton from '../../components/CurrencyButton';

const CurrencyFilter = ({ currencyFilter, dispatch }) => {

    return (
        <div id="currency-filters-container">
            <h3>Choose a currency</h3>
            {currenciesData.map((item) => <CurrencyButton
                currencyFilter={currencyFilter}
                currency={item}
                dispatch={dispatch}
            />)}
        </div>
    );
};

export default CurrencyFilter;
