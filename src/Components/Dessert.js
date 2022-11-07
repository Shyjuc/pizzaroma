import Menuitem from "./Menuitem";
import { useImmer } from "use-immer";

const Menu = () => {
  function createData(
    id: idber,
    title: string,
    image: string,
    ingredients: string,
    rate: string,
    rate_m: string,
    ratel: string,
    ratej: string
  ) {
    return { id, title, image, ingredients, rate, rate_m, ratel, ratej };
  }

  const [menu, setMenu] = useImmer([
    createData(
      1,
      "Pizza Margherita",
      "assets/img/pizza_margeritta.png",
      "Good ingredients",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      2,
      "Pizza Toscana",
      "assets/img/pizza_toscana.png",
      "Mozza Cheese, Spinach, Olives, Feta Cheese, Crumble Bacon",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      3,
      "Pizza Carbonara",
      "assets/img/pizza-carbonara.png",
      "Mozza Cheese, Whipping Cream Base, Crumble Bacon, Parmesan Flakes",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      4,
      "Pizza Italy",
      "assets/img/pizza-itallian.png",
      "Mozza Cheese, Salami, Mushroom, Black Olives, Green Paper, Ham",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      5,
      "Pizza Roma",
      "assets/img/pizza-roma.png",
      "Mozza Cheese, Ham, Mushroom, Parmesan Flakes, Peperoni",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      6,
      "Pizza Calabrain",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Italian Sausage, Onion, Green Pepper, Jalapenos",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      7,
      "Pizza Vegetarian",
      "assets/img/pizza_veg.png",
      "Mozza Cheese,Pepper, Mushroom, Zucchini, broccoli, Saute Veggie",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      8,
      "Pizza Tuna",
      "assets/img/pizza-tuna.png",
      "Mozza Cheese, Tuna Fish, Onion, Black Olives, Jalapenos",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      9,
      "Pizza Hawaiian",
      "assets/img/pizza-hawalian.png",
      "Mozza Cheese, Ham, Pineapple, Sliced Bacon",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      10,
      "Pizza Gusto",
      "assets/img/pizza-calabrian.png",
      "Good ingredients",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      11,
      "Pizza Terranova",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Whipping Cream as a base, Chicken Curry, Onion, broccoli, Pepper",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      12,
      "Pizza Colosseum",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Salami, Ham, Pepperoni, Mushroom, Pepper, egg, Crumble bacon",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      13,
      "Pizza MEDITERNIAN",
      "assets/img/pizza-calabrian.png",
      "Pepperoni, Tuna, Capers, Anchovies, Olives, Onions",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      14,
      "Pizza MEAT CLASSIC",
      "assets/img/pizza-calabrian.png",
      "Cheese, Pepperoni, Salami, Italian Sausage, Vienna Sausage, Ground Beef, Slice Bacon",
      "100",
      "100",
      "100",
      "100"
    ),
    createData(
      15,
      "Pizza Four Cheese",
      "assets/img/pizza-calabrian.png",
      "Mozza Cheese, Feta Cheese, Gorgonzola, Parmesano Flakes",
      "100",
      "100",
      "100",
      "100"
    ),
  ]);

  return (
    <>
      <h2 class="font-medium leading-tight text-4xl mt-10 mb-2 text-blue-600">
        Pizzas
      </h2>
      <div className="flex flex-wrap justify-center py-10">
        {menu.map((row) => (
          <Menuitem
            title={row.title}
            image={row.image}
            ingredients={row.ingredients}
            rate={row.rate}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
