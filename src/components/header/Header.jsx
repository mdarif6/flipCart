import React, { useState } from "react";
import { useCart } from "../../context/cart-context";
import "./Header.css";
export default function Header() {
  const { dispatch } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="flipcart-header-wrapper">
        <div className="flipcart-logo-and-searchbox-wrapper">
          <div className="flipcart-logo-and-searchbox">
            <div className="flipcart-logo">FlipCart</div>
            <div className="flipcart-searchbox">
              <input
                type="text"
                onChange={(e) =>
                  dispatch({ type: "SEARCH", payload: e.target.value })
                }
              />
              <button className="flipcart-searchbtn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flipcart-login-and-navicons">
          {isLoggedIn && <div className="flipcart-header-icon">More</div>}
          {isLoggedIn && <div className="flipcart-header-icon">Cart</div>}
          <div>
            {isLoggedIn ? (
              <button
                className="flipcart-primary-btn"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                Logout
              </button>
            ) : (
              <button
                className="flipcart-primary-btn"
                onClick={() => setIsLoggedIn(!isLoggedIn)}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      <header className="flipcart-header-wrapper-responsive">
        <div className="flipcart-logo-and-searchbox-wrapper">
          <div className="flipcart-logo-and-searchbox">
            <div className="flipcart-logo">FlipCart</div>
            <div className="flipcart-searchbox">
              <input
                type="text"
                onChange={(e) =>
                  dispatch({ type: "SEARCH", payload: e.target.value })
                }
              />
              <button className="flipcart-searchbtn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flipcart-login-and-navicons">
          <div className="flipcart-header-icon">More</div>
          <div className="flipcart-header-icon">Cart</div>
          <div>
            <button className="flipcart-primary-btn">Login</button>
          </div>
        </div>
      </header>
    </>
  );
}
