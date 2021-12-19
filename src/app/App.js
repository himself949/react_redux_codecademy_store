import CurrencyFilter from "../features/currencyFilter/CurrencyFilter";
import Inventory from "../features/inventory/Inventory";
import SearchTerm from "../features/searchTerm/SearchTerm";
import { getFilteredItems } from '../helpers/helpers'

function App({ state, dispatch }) {

  const visibleItems = getFilteredItems(state.inventory, state.searchTerm);

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

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