import React from "react";
import "./navbar.css";
// #7861b4
const Navbar = () => {
  return (
    <div class="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label for="show-menu" class="menu-icon">
          <i class="fas fa-bars"></i>
        </label>
        <div class="content">
          <div class="logo">
            <a href="#">Estatery</a>
          </div>
          <ul class="links">
            <li>
              <a href="#">Rent</a>
            </li>
            <li>
              <a href="#">Buy</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
            <li>
              <a href="#" class="desktop-link">
                Manage Property <i class="fa fa-angle-down"></i>
              </a>
              <input type="checkbox" id="show-features" />
              <label for="show-features">Features</label>
              <ul>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 3</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="desktop-link">
                Resources <i class="fa fa-angle-down"></i>
              </a>
              <input type="checkbox" id="show-services" />
              <label for="show-services">Services</label>
              <ul>
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" class="button">
            Signup
          </a>
          <a href="#" class="button1">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
