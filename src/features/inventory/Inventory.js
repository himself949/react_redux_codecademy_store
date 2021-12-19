import React, { useEffect } from 'react';
import InventoryItem from '../../components/InventoryItem';
import { loadData } from './inventorySlice';

const Inventory = ({ inventory, dispatch }) => {

  const onMount = () => {
    dispatch(loadData())
  }
  useEffect(onMount, [dispatch])

  if (inventory.length === 0) {
    return <p>Sorry, no products are currently available... </p>
  }

  return (
    <ul id="inventory-container">
      {inventory.map((item) => (<InventoryItem item={item} />))}
    </ul>
  );
};

export default Inventory;