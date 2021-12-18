import React from 'react';

const InventoryItem = ({item}) => {
    
    const { price, name, img } = item
    
    return (
        <li key={name} className="item">
            <p>test</p>
            
        </li>
    );
};

export default InventoryItem;