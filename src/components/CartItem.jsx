import React from 'react'
import { useState, useEffect } from 'react';

function CartItem({name,price,id,img,amount}) {

  const [itemAmount, setItemAmount] = useState(amount);

  const decreaseAmount = async () => {
    if (itemAmount === 0) {
      return; 
    }
    const updatedAmount = itemAmount - 1;
    setItemAmount(updatedAmount);
    await updateItem({ id, img, name, price, amount: updatedAmount });
  };

  const increaseAmount = async () => {
    const updatedAmount = itemAmount + 1;
    setItemAmount(updatedAmount);
    await updateItem({ id, img, name, price, amount: updatedAmount });
  };

  const updateItem = async (updatedItem) => {
    try {
      await fetch(`http://localhost:9000/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  useEffect(() => {
    if (itemAmount <= 0) {
      removeItem();
    }
  }, [itemAmount]);

  const removeItem = async () => {
    try {
      await fetch(`your_json_server_url/items/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (itemAmount <= 0) {
    return null; // Item with amount 0 or less is removed from the cart
  }

  return (
    <div>
      <div className='menu-item'>
        <img src={img} alt={name} />
        <p><b>{name}</b></p>
        <p>${price}</p>
        <p>Total Price: {price * itemAmount}</p>
        {/* <p>Amount: {itemAmount}</p> */}
        <div className='dark-grey'>
          <button onClick={decreaseAmount}>-</button>
          <input className='cart-input' value={itemAmount} readOnly />
          <button onClick={increaseAmount}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem