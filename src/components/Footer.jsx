import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className=" text-sm">
            Creating memories, one meal at a time, For the love of delicious food.Flavors that make you smile.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Dishes
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
          </nav>
        </div>
        {/* <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">
              Our Dishes
            </a>
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">
              Premium Menu
            </a>
          </nav>
        </div> */}
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Our Dishes
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Premium Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">
              venkatFoodie@email.com
            </a>
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">
              +91 8897605143
            </a>
            <a className=" hover:text-brightColor transition-all cursor-pointer" href="/">
              Social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-brightColor"> Venkat Naidana</span> |
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
