import { useEffect } from "react";
import Saladitem from "./Saladitem";
import { useImmer } from "use-immer";

const Menu = () => {
  function createData(
    id: idber,
    title: string,
    image: string,
    ingredients: string,
    rates: string,
    ratel: string
  ) {
    return { id, title, image, ingredients, rates, ratel };
  }

  const [menu, setMenu] = useImmer([
    createData(
      1,
      "Salad Roma",
      "assets/img/img_holder.png",
      "Lettuce, Pepper, Cucumber, Tuna Fish, Tomato, Carrot, Boil Eggs, Mozza Cheese, House Dressing",
      "11.99",
      "13.99"
    ),
    createData(
      2,
      "MIX SALAD",
      "assets/img/img_holder.png",
      "Lettuce, Carrot, Onion, Tomato, Cucumber,   House Dressing",
      "8.99",
      "10.99"
    ),
    createData(
      3,
      "Italia Salad",
      "assets/img/img_holder.png",
      "Lettuce, Tomato, Carrot, Chicken, Feta Cheese, Parmesan Flakes, Red Onion",
      "13.99",
      "15.99"
    ),
  ]);

  useEffect(() => {
    setMenu((draft) => {
      draft = menu;
    });
  }, [menu, setMenu]);

  return (
    <>
      <h2 class="font-medium leading-tight text-4xl mt-10 mb-2 text-red-600">
        Salads
      </h2>
      <div className="flex flex-wrap justify-center py-10">
        {menu.map((row) => (
          <Saladitem
            title={row.title}
            image={row.image}
            ingredients={row.ingredients}
            rates={row.rates}
            ratel={row.ratel}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
