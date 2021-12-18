import Inventory from "../features/inventory/Inventory";

function App({ state, dispatch }) {

  
  const visibleItems = state.inventory
  // const visibleItems = getFilteredItems(state.inventory, state.searchTerm);
  
  return (
    <div>

      <Inventory
        inventory={visibleItems}
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;

/*

        currencyFilter={state.currencyFilter}
        
*/