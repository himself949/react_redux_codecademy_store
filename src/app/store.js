import { combineReducers, createStore } from 'redux'
import { inventoryReducer } from '../features/inventory/inventorySlice.js'

export const store = createStore(combineReducers({
    inventory: inventoryReducer,
}))

