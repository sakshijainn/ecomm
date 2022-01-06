import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const user = "Guest";
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="heart"></ion-icon>
          </span>
          LovePen
          <span className="text-xl text-indigo-600 pl-5 mr-1 pt-2">
            Welcome , {user}
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md-flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md-pl-0 pl-9 
            transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
        >
          <li className="md:ml=8 text-2xl px-2  space-x-8 ... md:my-0 my-7">
            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/"
            >
              <ion-icon name="home-outline"></ion-icon>
            </Link>

            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/wishlist"
            >
              <ion-icon name="heart-outline"></ion-icon>
            </Link>

            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/cart"
            >
              <ion-icon name="cart-outline"></ion-icon>
            </Link>

            <Link
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/login"
            >
              <ion-icon name="person-outline"></ion-icon>
            </Link>

            <a className="text-gray-800 hover:text-gray-400 duration-500">
              <ion-icon name="toggle-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
