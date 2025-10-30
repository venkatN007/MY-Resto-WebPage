import React from "react";
import img1 from "../assets/img/chiken.jpg";
import img5 from "../assets/img/vegetable-fried-rice.jpg";
import img3 from "../assets/img/img4.jpg";
import img4 from "../assets/img/kababs.jpg";
import img6 from "../assets/img/img6.jpg";
import img2 from "../assets/img/nanns.jpeg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Chicken Tikka" price="₹ 260.00" />
        <DishesCard img={img2} title="Buttor Nanns" price="₹ 40.00" />
        <DishesCard img={img3} title="Chicken Seekh Kebab" price="₹ 340.00" />
        <DishesCard img={img4} title="Crispy Fried Chicken" price="₹ 250.00" />
        <DishesCard img={img5} title="Veg Fried Rice" price="₹ 240.00" />
        <DishesCard img={img6} title="Apolo Fish" price="₹ 350.00" />
      </div>
    </div>
  );
};

export default Dishes;
