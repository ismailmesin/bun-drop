import React from 'react'
import { useEffect, useState } from 'react';
import CartItem from './CartItem';

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/items");
      const data = await response.json();

      const filteredItems = data.filter(item => item.amount > 0);
      setCartItems(filteredItems);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


  return (
    <div>
      <div className='menu-container flex-container'>
          {cartItems?.map((m) => (
            <CartItem
              key={m.id}
              name={m.name}
              img={m.img}
              price={m.price}
              id={m.id}
              amount={m.amount}
            />
          ))}
      </div>
      <div className='cart-buttons'>
        <button className='cart-button'>Continue Shopping</button>
        <button className='cart-button'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart