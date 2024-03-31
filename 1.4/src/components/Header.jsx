import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../Utils/UserContext";

const loggedInUser = () => {
  return false;
};

export const Title = () => {
  return (
    <a href="/" className="logo text-4xl font-extrabold">
      Butter & Nan
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { loggedInUser } = useContext(UserContext);

  // selector
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className=" header flex bg-light-black text-light-cream justify-between items-center px-[10vw] py-4 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex gap-12  text-lg">
          <Link to="/">
            <li>
              <i className="fa-solid fa-house"></i> Home
            </li>
          </Link>
          <Link to="contact">
            <li>
              <i className="fa-solid fa-gift"></i> Contact
            </li>
          </Link>

          <Link to="/about">
            <li>
              <i className="fa-solid fa-question"></i> About
            </li>
          </Link>
          <Link to="/instamart">
            <li>
              <i className="fa-solid fa-question"></i> Instamart
            </li>
          </Link>

          <li className="relative">
            <p className="absolute left-[-20px] top-[-5px] p-1 bg-dark-orange rounded-full">
              {cart.length}
            </p>
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </li>
          {isLoggedIn ? (
            <button className="sign-btn" onClick={() => setIsLoggedIn(false)}>
              <i class="fa-solid fa-user"></i> LogOut
            </button>
          ) : (
            <button className="sign-btn" onClick={() => setIsLoggedIn(true)}>
              <i className="fa-solid fa-user"></i> Login
            </button>
          )}
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
