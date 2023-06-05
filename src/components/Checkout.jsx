import React from 'react';
import { CreditCard } from 'phosphor-react';
import paypal from '../Logo/Paypal.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Checkout() {


  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCardPaymenyClick = () => {
    if (!name || !city || !address) {
      setErrorMessage('Please fill in all the required fields.');
    } else {
      navigate('/cardpayment');
    }
  };

  const handlePaypalClick = () => {
    if (!name || !city || !address) {
      setErrorMessage('Please fill in all the required fields.');
    } else {
      navigate('/paypalpayment');
    }
  };

  return (
    <div>
      <div className='flex-container-col'>
        <p>
          <b className='light-grey'>Please fill in the information</b>
        </p>
      </div>
      <div className='flex-container-col'>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>City:</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>Address:</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className='link-container'>
        <button className='light-grey invisible-button' onClick={handleCardPaymenyClick}>
          <CreditCard size={50} className='black' />
        </button>
        <button className='light-grey invisible-button' onClick={handlePaypalClick}>
          <img src={paypal} className='paypal-logo' alt='paypal-logo' />
        </button>
      </div>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
}

export default Checkout;
