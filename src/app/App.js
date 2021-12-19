import Cart from "../features/cart/Cart";
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
        currencyFilter={state.currencyFilter}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;