import React from 'react';

function Confirmation() {

    let time = Math.floor((Math.random() * 45) + 15);

    return ( 
        <div>
            <div className='flex-container'>
                <h1 className='light-grey'>Thank you for your order</h1>
            </div>
            <div className='flex-container'>
            <p><b className='light-grey'>your order will be at your doorstep in about {time} minutes</b></p>
            </div>
        </div>
     );
}

export default Confirmation;