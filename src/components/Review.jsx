import React from "react";
import ReviewCard from "../layouts/ReviewCard";
//import  from "../assets/img/pic1.png";
import img1 from "../assets/img/venkat.jpeg"
import img2 from "../assets/img/yasar.jpeg";
import img3 from "../assets/img/sujayA.jpeg"
const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Venkat" review="I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back! " />
        <ReviewCard img={img2} name="Yasar" review="Best place to get breakfast! Extremely friendly and competent wait staff. Lovely place! Great breakfast, I had eggs mulligan, the homemade corned beef is to die for! My love had potato pancakes which he thoroughly enjoyed too! Waitress was vibrant and attentive." />
        <ReviewCard img={img3} name="Sujay" review="I am gluten, free, vegan, and had the quinoa bowl with avocado. Delicious! My husband had oatmeal with blueberries and oat milk. Our grandson had a huge egg breakfast with French toast.Extremely friendly and competent wait staff. Lovely place! Great breakfast, and we all were happy!" />
      </div>
    </div>
  );
};

export default Review;
