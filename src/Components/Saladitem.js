import React from "react";

function Saladitem(props) {
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-sm mx-5 my-3">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img className="rounded-t-lg" src={props.image} alt="" />
      </a>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          {props.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{props.ingredients}</p>
        <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-lime-600 bg-lime-200 uppercase last:mr-0 mr-1">
          ${props.rates}
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-yellow-600 bg-yellow-200 uppercase last:mr-0 mr-1">
          M: ${props.ratel}
        </span>

        <button
          type="button"
          className="w-full inline-block px-6 py-2.5 mt-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Saladitem;
