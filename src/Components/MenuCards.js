
import pizza from '../assets/img/pizza_1.png';
import pasta from '../assets/img/pasta.png';
import dessert from '../assets/img/desserts.png';

const MenuCards = () =>{
    return(
        <>
        <h2 className="text-3xl font-bold tracking-tight text-red-800 sm:text-3xl md:text-4xl mt-6">Traditional Itlian Cuisine and Pizza</h2>
        <h3 classNAme="font-medium text-4xl mt-10 mb-2 text-[#322212]">Now We Are Open With Full Dine. we offer you the best flavors of Italian cuisine</h3>
        <div className="flex justify-center py-10">
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5 ">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pizza} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Pizzas</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View more</button>
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pasta} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Pasta</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View more</button>
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={dessert} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Desserts</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View more</button>
    </div>
  </div>
</div>
</>
    )
}

export default MenuCards;