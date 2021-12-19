export function getFilteredItems(items, searchTerm) {
    return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export function calculatePrice(price, currency) {
    switch (currency) {
        case 'EUR':
            return price * 0.86;
        case 'CAD':
            return price * 1.33;
        default:
            return price;
    }
}

export function getCurrencySymbol(currencyFilter) {
    switch (currencyFilter) {
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'CAD':
            return '$';
        default:
            return '';
    }
}