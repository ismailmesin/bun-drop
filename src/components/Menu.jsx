import React from 'react'
import { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

function Menu() {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/items")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
      });
  }, []);

  return (
    <div>

      <div className='menu-container flex-container'>
          {menuItems?.map((m) => (
            <MenuItem
              key={m.id}
              name={m.name}
              img={m.img}
              price={m.price}
              id={m.id}
              amount={m.amount}
            />
          ))}
      </div>

    </div>
  )
}

export default Menu