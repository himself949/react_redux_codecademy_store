import { combineReducers, createStore } from 'redux'
import { inventoryReducer } from '../features/inventory/inventorySlice.js'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js'

export const store = createStore(combineReducers({
    inventory: inventoryReducer,
    searchTerm: searchTermReducer,
}))

