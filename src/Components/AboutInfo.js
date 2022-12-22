import React from 'react'
import about3 from '../assets/img/3.png';
import about2 from '../assets/img/2.png';
import about1 from '../assets/img/4.png';

function AboutInfo() {
  return (
    <>
<div class="bg-red-500 dark:bg-red-800 overflow-hidden relative lg:flex lg:items-center">
    <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-12 z-20 justify-start">
        <h2 class="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            <span class="block">
            Serving up the best pizza in the City
            </span>
        </h2>
        <p class="text-md mt-4 text-white justify-start">
        We serve authentic Italian delicacies at our spacious, hospitable environment. Serving up the best pizza - dough rolled fresh daily, using vegetables and meats sliced every day… all on a fresh, golden brown crust… with superior service for dine in, carry out or delivery. 
        </p>
        <p class="text-md mt-4 text-white justify-start">Our menu is not limited to Pizza, but also includes mouth watering pastas and genuine Italian dinners.</p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Read more
                </button>
            </div>
        </div>
    </div>
    <div class="flex items-center gap-8 p-8 lg:p-24">
        <img src={about3} class="w-1/2 rounded-lg" alt="Tree"/>
        <div>
            <img src={about2} class="mb-8 rounded-lg" alt="Tree"/>
            <img src={about1} class="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>

    </>
  )
}

export default AboutInfo