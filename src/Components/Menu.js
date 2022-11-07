import { useEffect } from "react";
import Menuitem from "./Menuitem";
import { useImmer } from "use-immer";

const Menu = () => {
  function createData(
    id: idber,
    title: string,
    image: string,
    ingredients: string,
    rate: string,
    ratem: string,
    ratel: string,
    ratej: string
  ) {
    return { id, title, image, ingredients, rate, ratem, ratel, ratej };
  }

  const [menu, setMenu] = useImmer([
    createData(
      1,
      "Pizza Margherita",
      "assets/img/pizza_margeritta.png",
      "Good ingredients",
      "10.99",
      "12.99",
      "14.99",
      "16.99"
    ),
    createData(
      2,
      "Pizza Toscana",
      "assets/img/pizza_toscana.png",
      "Mozza Cheese, Spinach, Olives, Feta Cheese, Crumble Bacon",
      "14.99",
      "16.99",
      "19.99",
      "24.99"
    ),
    createData(
      3,
      "Pizza Carbonara",
      "assets/img/pizza-carbonara.png",
      "Mozza Cheese, Whipping Cream Base, Crumble Bacon, Parmesan Flakes",
      "14.99",
      "16.99",
      "19.99",
      "24.99"
    ),
    createData(
      4,
      "Pizza Italy",
      "assets/img/pizza-itallian.png",
      "Mozza Cheese, Salami, Mushroom, Black Olives, Green Paper, Ham",
      "14.99",
      "16.99",
      "19.99",
      "24.99"
    ),
    createData(
      5,
      "Pizza Roma",
      "assets/img/pizza-roma.png",
      "Mozza Cheese, Ham, Mushroom, Parmesan Flakes, Peperoni",
      "14.99",
      "16.99",
      "19.99",
      "24.99"
    ),
    createData(
      6,
      "Pizza Calabrain",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Italian Sausage, Onion, Green Pepper, Jalapenos",
      "15.99",
      "17.99",
      "20.99",
      "25.99"
    ),
    createData(
      7,
      "Pizza Vegetarian",
      "assets/img/pizza_veg.png",
      "Mozza Cheese,Pepper, Mushroom, Zucchini, broccoli, Saute Veggie",
      "16.99",
      "18.99",
      "20.99",
      "24.99"
    ),
    createData(
      8,
      "Pizza Tuna",
      "assets/img/pizza-tuna.png",
      "Mozza Cheese, Tuna Fish, Onion, Black Olives, Jalapenos",
      "14.99",
      "17.99",
      "20.99",
      "24.99"
    ),
    createData(
      9,
      "Pizza Hawaiian",
      "assets/img/pizza-hawalian.png",
      "Mozza Cheese, Ham, Pineapple, Sliced Bacon",
      "14.99",
      "17.99",
      "20.99",
      "24.99"
    ),
    createData(
      10,
      "Pizza Gusto",
      "assets/img/pizza-calabrian.png",
      "Good ingredients",
      "16.99",
      "18.99",
      "22.99",
      "25.99"
    ),
    createData(
      11,
      "Pizza Terranova",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Whipping Cream as a base, Chicken Curry, Onion, broccoli, Pepper",
      "16.99",
      "20.99",
      "24.99",
      "28.99"
    ),
    createData(
      12,
      "Pizza Colosseum",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Salami, Ham, Pepperoni, Mushroom, Pepper, egg, Crumble bacon",
      "17.99",
      "21.99",
      "25.99",
      "29.99"
    ),
    createData(
      13,
      "Pizza MEDITERNIAN",
      "assets/img/pizza-calabrian.png",
      "Pepperoni, Tuna, Capers, Anchovies, Olives, Onions",
      "14.99",
      "17.99",
      "21.99",
      "24.99"
    ),
    createData(
      14,
      "Pizza MEAT CLASSIC",
      "assets/img/pizza-calabrian.png",
      "Cheese, Pepperoni, Salami, Italian Sausage, Vienna Sausage, Ground Beef, Slice Bacon",
      "20.99",
      "24.99",
      "28.99",
      "32.99"
    ),
    createData(
      15,
      "Pizza Four Cheese",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Feta Cheese, Gorgonzola, Parmesano Flakes",
      "14.99",
      "17.99",
      "20.99",
      "23.99"
    ),
  ]);

  useEffect(() => {
    setMenu((draft) => {
      draft = menu;
    });
  }, []);

  return (
    <>
      <h2 class="font-medium leading-tight text-4xl mt-10 mb-2 text-red-600">
        Pizzas
      </h2>
      <div className="flex flex-wrap justify-center py-10">
        {menu.map((row) => (
          <Menuitem
            title={row.title}
            image={row.image}
            ingredients={row.ingredients}
            rate={row.rate}
            ratem={row.ratem}
            ratel={row.ratel}
            ratej={row.ratej}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
