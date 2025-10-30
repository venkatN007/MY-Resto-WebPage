import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-48 px-5 bg-[url('./assets/img/bg_img2.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-white font-semibold text-6xl">
          Where Every Meal is a Celebration.
        </h1>
        <p className=" text-white">
          Discover the flavors that linger long after the last bite. Your palate's beautiful journey begins here. Locally-sourced ingredients, inspired global flavors. Find your new favorite dish.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
