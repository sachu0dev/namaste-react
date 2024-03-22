import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return false;
};

export const Title = () => {
  return (
    <a href="/" className="logo">
      Butter & Nan
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header ">
      <Title />
      <div className="nav-items">
        <ul>
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

          <li>
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </li>
          {isLoggedIn ? (
            <button className="sign-btn" onClick={() => setIsLoggedIn(false)}>
              <i class="fa-solid fa-user"></i> LogOut
            </button>
          ) : (
            <button className="sign-btn" onClick={() => setIsLoggedIn(true)}>
              <i class="fa-solid fa-user"></i> Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};
