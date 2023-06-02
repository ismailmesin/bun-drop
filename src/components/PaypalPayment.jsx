import React from 'react';
import paypal from '../Logo/Paypal.png'

function PaypalPayment() {
    return (
        <div>
        <div className='flex-container-col'>
            <img src={paypal} className='paypal-logo margin' alt='paypal-logo'></img>

        </div>
        <div className='flex-container-col'>
            <label>Phone Number:</label>
            <input />
            <button className='btn-buy'>PAY</button>
        </div>
    </div>
    );
}

export default PaypalPayment;