import React from 'react'
import { useState } from 'react';

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

  // useEffect(() => {
  //   if (itemAmount <= 0) {
  //     removeItem();
  //   }
  // }, [itemAmount]);

  // const removeItem = async () => {
  //   try {
  //     await fetch(``, {
  //       method: 'DELETE',
  //     });
  //   } catch (error) {
  //     console.error('Error removing item:', error);
  //   }
  // };

  if (itemAmount <= 0) {
    return null; // Item with amount 0 or less is removed from the cart
  }

  const totalAmount = Math.round(price * itemAmount);

  return (
    <div>
      <div className='menu-item'>
        <img src={img} className='img-card' alt={name} />
        <p><b>{name}</b></p>
        <p>${price}</p>
        <p>Total Price: ${totalAmount}</p>
        <div className='dark-grey'>
          <button className='decrease-button' onClick={decreaseAmount}>-</button>
          <input className='cart-input' value={itemAmount} readOnly />
          <button className='increase-button' onClick={increaseAmount}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem