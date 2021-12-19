import { combineReducers, createStore } from 'redux'
import { inventoryReducer } from '../features/inventory/inventorySlice'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice'
import { cartReducer } from '../features/cart/cartSlice'

export const store = createStore(combineReducers({
    inventory: inventoryReducer,
    searchTerm: searchTermReducer,
    currencyFilter: currencyFilterReducer,
    cart: cartReducer,
}))

