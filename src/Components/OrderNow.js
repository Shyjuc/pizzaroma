import React from 'react'
import pizza from '../assets/img/pizza_1.png';
import phone from '../assets/img/phone.png';

function OrderNow() {
  return (
<div className="mx-auto py-20 flex item-center justify-center">

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pizza} alt=""/>
    </a>
    <div className='flex flex-row justify-center item-center p-10'>
        <div className='px-1'><img className="rounded-t-sm" src={phone} alt=""/></div>
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Please call now to order from us</h5>
    
    </div>
    
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Call : + 368-3100</p>
    <a href="/" className="inline-flex items-center text-red-600 hover:underline">
    673 Topsail Road, Waterford Plaza, Unit 4, A1E 2E3, NL, Canada
    </a>
</div>

</div>
  )
}

export default OrderNow