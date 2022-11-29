import React, { useState } from "react";
import cover from "../assets/img/bg_cover1.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="relative overflow-hidden bg-[#f0cfa5]">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 bg-[#f0cfa5] pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
              fill="#f0cfa5"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                    <Link
                      to="/pizzas"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Pizzas
                    </Link>

                    <Link
                      to="/pastas"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Pasta
                    </Link>

                    <Link
                      to="/salads"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Salads
                    </Link>

                    <Link
                      to="/desserts"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Desserts
                    </Link>

                    <Link
                      to="/order"
                      className="nav-link scrollto active"
                      onClick={closeMobileMenu}
                    >
                      Order now
                    </Link>
                    <i
                      onClick={handleClick}
                      className="bi bi-list mobile-nav-toggle"
                    ></i>
                  </div>
                </nav>
              </div>

              
            </div>

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    <i>Hot and Fresh...</i>
                  </span>
                  <span className="block text-red-600 xl:inline">
                    Super Delicious Pizzas!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  The best Italian flavors, are preparing hygienic conditions.
                  We offer to your peace of mind using reliable materials.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
                    >
                      View Menu
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-100 px-8 py-3 text-base font-medium text-red-700 hover:bg-red-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src={cover}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
