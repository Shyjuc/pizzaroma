import { useEffect } from "react";
import Dessertitem from "./Dessertitem";
import { useImmer } from "use-immer";

const Menu = () => {
  function createData(
    id: idber,
    title: string,
    image: string,
    ingredients: string,
    rates: string
  ) {
    return { id, title, image, ingredients, rates };
  }

  const [menu, setMenu] = useImmer([
    createData(
      1,
      "Tiramisu",
      "assets/img/img_holder.png",
      "Savoiardi biscuit, Mascarpone cream with Amaretto & Sambuca liquor.",
      "7.50"
    ),
    createData(
      2,
      "Cheese Cake",
      "assets/img/img_holder.png",
      "Choice your Sauce. Caramel or Choco Sauce",
      "5.00"
    ),
    createData(3, "Cookies", "assets/img/img_holder.png", "...", "0.60"),
  ]);

  useEffect(() => {
    setMenu((draft) => {
      draft = menu;
    });
  }, [menu, setMenu]);

  return (
    <>
      <h2 class="font-medium leading-tight text-4xl mt-10 mb-2 text-red-600">
        Desserts
      </h2>
      <div className="flex flex-wrap justify-center py-10">
        {menu.map((row) => (
          <Dessertitem
            title={row.title}
            image={row.image}
            ingredients={row.ingredients}
            rate={row.rates}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
