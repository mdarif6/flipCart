import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header className="flipcart-header-wrapper">
        <div className="flipcart-logo-and-searchbox-wrapper">
          <div className="flipcart-logo-and-searchbox">
            <div className="flipcart-logo">FlipCart</div>
            <div className="flipcart-searchbox">
              <input type="text" />
              <button className="flipcart-searchbtn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flipcart-login-and-navicons">
          <div>
            <button className="flipcart-primary-btn">Login</button>
          </div>
          <div className="flipcart-header-icon">More</div>
          <div className="flipcart-header-icon">Cart</div>
        </div>
      </header>

      <header className="flipcart-header-wrapper-responsive">
        <div className="flipcart-logo-and-searchbox-wrapper">
          <div className="flipcart-logo-and-searchbox">
            <div className="flipcart-logo">FlipCart</div>
            <div className="flipcart-searchbox">
              <input type="text" />
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
