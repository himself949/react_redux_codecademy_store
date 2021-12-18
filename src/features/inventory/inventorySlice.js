import { inventoryData } from '../../data'

const initialInventory = []
export const inventoryReducer = (state = initialInventory, action) => {
    switch (action.type) {
        case "inventory/loadData":
            return action.payload
        default:
            return state
    }
}

export const loadData = () => {
    return {
        type: "inventory/loadData",
        payload: inventoryData,
    }
}