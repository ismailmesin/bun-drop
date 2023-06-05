
import React, { useEffect, useState } from 'react';

function MenuItem({ name, price, id, img, amount }) {

    const [product, setProduct] = useState(null);
    const [currentAmount, setCurrentAmount] = useState(amount);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch('http://localhost:9000/items');
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log('Error fetching product data:', error);
    }
  };

  const increaseAmountById = async (productId) => {
    if (!product) return;
    const updatedProduct = product.find((item) => item.id === productId);
    if (!updatedProduct) return;

    updatedProduct.amount += 1;

    setCurrentAmount(updatedProduct.amount);

    try {
      await fetch(`http://localhost:9000/items/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      setProduct([...product]);
    } catch (error) {
      console.log('Error updating product:', error);
    }
  };

  return (
    <div>
      <div className='menu-item'>
        <img src={img} className='img-card' alt='' />
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
        <p>In Cart: {currentAmount}</p>
        <button className='buy-button' onClick={() => increaseAmountById(id)}>Buy</button>
      </div>
    </div>
  );
}

export default MenuItem;
