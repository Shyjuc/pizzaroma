import React from 'react'
import about3 from '../assets/img/3.png';
import about2 from '../assets/img/2.png';
import about1 from '../assets/img/4.png';

function AboutInfo() {
  return (
    <>
<div className="bg-red-500 bg-[#f0cfa5] overflow-hidden relative lg:flex">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-12 z-20 justify-start">
        <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            <span className="block">
            Discover the Legendary Taste of Italian Pizzas
            </span>
        </h2>
        <p className="text-md mt-4 text-grey-600 justify-start">
        The pizza served in PizzaRoma is exactly the same as the pizza you can eat on the streets of Rome or Naples using the same ingredients and adopting the same cooking method. All of our dough is made fresh, daily, sourcing the best ingredients Italy has to offer in order to bring you the best possible pizza base going. Our delicious, healthy pizza slices are the ultimate brain food and the ideal way to cater for corporate events, private & birthday party. Whether it’s an informal lunch or office party, a business meeting or networking event, we’ll tailor our food to meet your requirements
 
        </p>
        <p className="text-md mt-4 text-grey-600 justify-start">Our menu is not limited to Pizza, but also includes mouth watering pastas and genuine Italian dinners.</p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    View menu
                </button>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src={about3} className="w-1/2 rounded-lg" alt="Tree"/>
        <div>
            <img src={about2} className="mb-8 rounded-lg" alt="Tree"/>
            <img src={about1} className="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>

    </>
  )
}

export default AboutInfo