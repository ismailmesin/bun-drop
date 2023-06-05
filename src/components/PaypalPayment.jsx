import React from 'react';
import paypal from '../Logo/Paypal.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 

function PaypalPayment() {

    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const validateUserInput = () => {
        if (!phoneNumber){
            setErrorMessage('Please fill the required field')
        }
        else if(phoneNumber.length !== 10){
            setErrorMessage('Please enter a valid 10-digit number')
        }
        else{
            navigate('/confirmation')
        }
    }

    return (
        <div>
        <div className='flex-container-col'>
            <img src={paypal} className='paypal-logo margin' alt='paypal-logo'></img>

        </div>
        <div className='flex-container-col'>
            <label>Phone Number:</label>
            <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className='btn-buy' onClick={validateUserInput}>PAY</button>
        </div>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
    );
}

export default PaypalPayment;