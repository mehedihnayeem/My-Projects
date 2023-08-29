import React from "react";

function NavBar() {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div>
            <h1 className="title">Brown Jhonson</h1>
            <p className="sub-title"> Full-stack Devolper</p>
          </div>
          <div>
            <ul className="nav-link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li className="link-active">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
