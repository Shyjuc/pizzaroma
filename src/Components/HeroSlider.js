import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import cover from "../assets/img/bg_cover1.jpg";
import cover2 from "../assets/img/bg_1.jpg";
import cover3 from "../assets/img/bg_2.png";
import cover4 from "../assets/img/bg_4.jpg";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [count, setCount] = useState(1);

  const [title, setTitle] = useState("Hot and Fresh..");
  const [line, setLine] = useState("Super Delicious Pizzas!");
  const [subtitle, setSubtitle] = useState("The best Italian flavors, are preparing hygienic conditions. We offer to your peace of mind using reliable materials");
  const [slideimage, setSlideimage] = useState(cover);

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  function createData(
    id: number,
    title_main: string,
    title_sub: string,
    subtitle: string,
    bg_image: string,
    cta_button: string,
    cta_link: string,
    active_status: Boolean
  ) {
    return {
      id,
      title_main,
      title_sub,
      subtitle,
      bg_image,
      cta_button,
      cta_link,
      active_status,
    };
  }

  const [carousel, setCarousel] = useImmer([
    createData(
      1,
      "Hot and Fresh..",
      "Super Delicious Pizzas!",
      "The best Italian flavors, are preparing hygienic conditions. We offer to your peace of mind using reliable materials.",
      cover,
      "Read more",
      "/home",
      true
    ),
    createData(
      2,
      "Hot and Fresh..",
      "Super Delicious Pizzas!",
      "The best Italian flavors, are preparing hygienic conditions. We offer to your peace of mind using reliable materials.",
      cover2,
      "Read more",
      "/home",
      false
    ),
    createData(
      3,
      "Hot and Fresh..",
      "Super Delicious Pizzas!",
      "The best Italian flavors, are preparing hygienic conditions. We offer to your peace of mind using reliable materials.",
      cover3,
      "Read more",
      "/home",
      false
    ),
    createData(
      4,
      "Hot and Fresh..",
      "Super Delicious Pizzas!",
      "The best Italian flavors, are preparing hygienic conditions. We offer to your peace of mind using reliable materials.",
      cover4,
      "Read more",
      "/home",
      false
    ),
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (count < 4) {
        setCount(count + 1);
        setCarousel((draft) => {
          setTitle(draft[count].title_main);
          setLine(draft[count].title_sub);
          setSubtitle(draft[count].subtitle);
          setSlideimage(draft[count].bg_image);
        });
      } else {
        setCount(0);
      }
    }, 9000);
  });

  const handleCarousel = (e) => {
    console.log(e);
    //let newState;

    carousel.map((item, index) => {
      if (index === e - 1) {
        console.log(index);
        setCarousel((draft) => {
          setTitle(draft[e - 1].title_main);
          setLine(draft[e - 1].title_sub);
          setSubtitle(draft[e - 1].subtitle);
          setSlideimage(draft[e - 1].bg_image);
          setCount(e);
        });
      }
    });
  };

  //console.log(count);

  //const [current, setCurrent] = useState(1);

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
                    <i className="bi bi-list mobile-nav-toggle"></i>
                  </div>
                </nav>
              </div>
            </div>

            <div>
              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="hidden md:block md:space-x-8 md:pr-4">
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
                  <span className="block xl:inline py-30">
                    <i>{title}</i>
                  </span>
                  <span className="block text-red-600 xl:inline mt-10">
                    {line}.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  {subtitle}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="flex z-50 item-bottom justify-start absolute bottom-10 left-20">
            <div
              className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
              role="toolbar"
            >
              <button
                type="button"
                onClick={() => handleCarousel(1)}
                className="rounded-l inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
              >
                1
              </button>
              <button
                type="button"
                onClick={() => handleCarousel(2)}
                className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
              >
                2
              </button>
              <button
                type="button"
                onClick={() => handleCarousel(3)}
                className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
              >
                3
              </button>
              <button
                type="button"
                onClick={() => handleCarousel(4)}
                className="rounded-r inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
              >
                4
              </button>
            </div>
          </div>
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full ease-in-out duration-500 animate-pulse animate-flip-down animate-delay-1000"
            src={slideimage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
