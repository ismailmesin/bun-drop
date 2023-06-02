import React from 'react'
import { CreditCard } from 'phosphor-react'
import paypal from '../Logo/Paypal.png'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
<div>
  <div className='flex-container-col'>
    <p>
      <b className='light-grey'>Please fill in the information</b>
    </p>
  </div>
  <div className='flex-container-col'>
    <label>Name:</label>
    <input placeholder='City' />
    <label>City:</label>
    <input placeholder='Address' />
    <label>Address:</label>
    <input />
  </div>
  <div className='link-container'>
    <Link to='/CardPayment' className='light-grey'><CreditCard size={50} className='black' /></Link>
    <Link to='/PaypalPayment' className='light-grey'><img src={paypal} className='paypal-logo' alt='paypal-logo'></img></Link>
  </div>
</div>
  )
}

export default Checkout