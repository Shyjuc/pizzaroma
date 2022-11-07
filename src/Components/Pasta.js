import Pastaitem from "./Pastaitem";
import { useImmer } from "use-immer";

const Menu = () => {
  function createData(
    id: idber,
    title: string,
    image: string,
    ingredients: string,
    rate: string
  ) {
    return { id, title, image, ingredients, rate };
  }

  const [menu, setMenu] = useImmer([
    createData(
      1,
      "Spaghetti Carbonara",
      "assets/img/pizza_margeritta.png",
      "Cream Sauce, Crumble Bacon, Yellow Egg with Parmesan Cheese",
      "11.99"
    ),
    createData(
      2,
      "Fusilli Aldo",
      "assets/img/pizza_toscana.png",
      "Pepper, Onion, Bolognese with Cream Sauce",
      "10.99"
    ),
    createData(
      3,
      "Fusilli Calabrese",
      "assets/img/pizza-carbonara.png",
      "Italian Sausage, Onion, Garlic, Parmesan Cheese, Tomato Sauce",
      "12.99"
    ),
    createData(
      4,
      "Lasagna Classica",
      "assets/img/pizza-itallian.png",
      "Homemade Lasagna",
      "11.99"
    ),
    createData(
      5,
      "Marconi Pavarotti",
      "assets/img/pizza-roma.png",
      "Cream Sauce, Gorgonzola, Bacon, Broccoli, Fresh Tomato",
      "12.99"
    ),
    createData(
      6,
      "Macaroni Rubal",
      "assets/img/pizza-calabrian.png",
      "Mushroom, Fresh Tomato, Chicken Gravy, Cream Sauce, Parmesan",
      "14.99"
    ),
    createData(
      7,
      "Macaroni Prashant",
      "assets/img/pizza-calabrian.png",
      "Mushroom, Fresh Tomato, Chicken Gravy, Cream Sauce, Parmesan Cheese",
      "12.99"
    ),
    createData(
      8,
      "Macaroni Cream Sauce",
      "assets/img/pizza-calabrian.png",
      "with Parmesan cheese and ham",
      "11.99"
    ),
    createData(
      9,
      "Spaghetti Salmon",
      "assets/img/pizza_veg.png",
      "Salmon, Garlic, Green Onion, Tomato Sauce, Cream Sauce",
      "15.99"
    ),
  ]);

  return (
    <>
      <h2 class="font-medium leading-tight text-4xl mt-10 mb-2 text-red-600">
        Pasta
      </h2>
      <div className="flex flex-wrap justify-center py-10">
        {menu.map((row) => (
          <Pastaitem
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
