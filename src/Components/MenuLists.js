import pizza1 from '../assets/img/pizza_margeritta.png';
import pizza2 from '../assets/img/pizza_toscana.png';
import pizza3 from '../assets/img/pizza_veg.png';
import pizza4 from '../assets/img/pizza-calabrian.png';

const MenuLists = () =>{
    return(
        <>
        <h2 class="font-medium leading-tight text-4xl mt-10 mb-2 text-blue-600">Pizzas</h2>
        <div className="flex justify-center py-10">
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pizza1} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Pizza Margeritta</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions..
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Order Now</button>
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pizza2} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Pizza Toscana</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Order Now</button>
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pizza3} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Veg Pizza</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Order Now</button>
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={pizza4} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Pizza Calabrian</h5>
      <p className="text-gray-700 text-base mb-4">
      The best Italian flavors, are preparing hygienic conditions.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Order Now</button>
    </div>
  </div>
</div>
</>
    )
}

export default MenuLists;