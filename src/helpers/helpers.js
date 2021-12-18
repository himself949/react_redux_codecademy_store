export function getFilteredItems(items, searchTerm) {
    return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}