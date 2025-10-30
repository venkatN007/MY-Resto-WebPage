import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>&nbsp;&nbsp;&nbsp;
            Choosing us means choosing a dedication to uncompromising quality from the ground up. 
          We believe great food starts with great ingredients, which is why we meticulously source the freshest, 
          often local and seasonal, components for every dish. Our cuisine isn't just prepared; 
          it's thoughtfully crafted by a passionate chef team who blend time-honored techniques with exciting culinary innovation. 
          This ensures that every plate leaving our kitchen is not just a meal, but a masterpiece of flavor—delicious, 
          satisfying, and a true tribute to the art of eating.
          
        </p>
        <p>&nbsp;&nbsp;&nbsp;
          More than just the food, we offer an elevated dining experience designed to delight all your senses.
          Our atmosphere is carefully curated—a perfect blend of elegance and warmth, making us the ideal setting for any occasion, 
          from an intimate date night to a lively gathering. Paired with this is our dedicated service team, committed to making you feel genuinely welcome and ensuring a seamless, 
          attentive experience from the moment you walk through the door. When you choose us, you're not just booking a table; you're securing a memorable moment where taste, ambiance, 
          and service beautifully converge.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
