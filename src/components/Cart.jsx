import React from 'react';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

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

  const isCheckoutDisabled = cartItems.every(item => item.amount === 0);

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
      <div className='flex-container'>
        <Link to='/menu' className='light-grey'>
          <button className='cart-button light-grey'>Continue Shopping</button>
        </Link>
        <Link to='/checkout' className='light-grey'>
          <button className='cart-button light-grey' disabled={isCheckoutDisabled}>
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
