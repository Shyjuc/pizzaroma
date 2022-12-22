import React, { useState } from "react";
import Menu from "./Menus";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function MenuContent() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log("click", category);
    if (category === "all") {
      setMenuItems(items);
      setCategories(allCategories);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('pizzaroma-menu.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'pizzaroma-menu.pdf';
            alink.click();
        })
    })
}

  return (
    <main>
      <section className="menu section p-5 lg:p-20">
        <div className="title flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl py-4">PizzaRoma Menu</h2>
          <button className="flex mb-2" onClick={onButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg> Download menu
                </button>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 font-bold text-red-600">Everyday Special 11.00am to 2.00pm Buffet $14.99 (Tax Included)</span>
          <div className="flex-grow border-t border-gray-400"></div>
      </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuContent;
