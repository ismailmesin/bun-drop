import React from 'react';
import { CreditCard } from 'phosphor-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CardPayment() {

    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState(''); 
    const [errorMessage, setErrorMessage] = useState('');
  
    const handlePayButtonClick = () => {
      if (!cardNumber || !expirationDate || !cvv) {
        setErrorMessage('Please fill in all the required fields.');
      }
       else if (cardNumber.length !== 16) {
        setErrorMessage('Please enter a valid 16-digit card number.');
      } 
      else if (cvv.length !== 3) {
        setErrorMessage('Please enter a valid 3-digit CVV.');
      } 
      else {
        navigate('/confirmation')
      }
    };
  
    return (
      <div>
        <div className='flex-container-col'>
          <p>
            <CreditCard size={70} className='light-grey' />
          </p>
        </div>
        <div className='flex-container-col'>
          <label>Card Number:</label>
          <input
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
          />
          <label>Expiration Date:</label>
          <input
            type='date'
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
          <label>CVV:</label>
          <input
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            maxLength={3}
          />
          <button className='btn-buy' onClick={handlePayButtonClick}>
            PAY
          </button>
        </div>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
      </div>
    );
}

export default CardPayment;