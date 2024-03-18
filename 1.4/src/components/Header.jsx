import { useState } from "react";

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
          <li>
            <i className="fa-solid fa-house"></i> Home
          </li>
          <li>
            <i className="fa-solid fa-gift"></i> Offers
          </li>
          <li>
            <i className="fa-solid fa-question"></i> About
          </li>
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
