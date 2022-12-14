import React from 'react'
import { Link } from "react-router-dom";

function Order() {
  return (
    <div>
        <div className="bg-gray-50">
  <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block">Dine-in | Take-Out | Delivery</span>
      <span className="block text-red-600">Order for fast delivery straight to your door</span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <Link
                      to="/order"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-5 py-3 text-base font-medium text-white hover:bg-black-700"
                      
                    >
                      Order now
                    </Link>
      </div>
      <div className="ml-3 inline-flex rounded-md shadow">
        <Link
                      to="/pizzas"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-red-50"
                      
                    >
                      View menu
                    </Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Order