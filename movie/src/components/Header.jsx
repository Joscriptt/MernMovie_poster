import React from "react";

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="text-white lg:px-16 px-8 mt-5">
      <header className="flex justify-between">
        <Link to={"/"}>
          <img className="w-7 object-contain" src="/img/Joscript.png" alt="" />
        </Link>
        <nav>
          <ul className="font-bold flex gap-x-4">
            <NavLink to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/blog"}>
              <li>Blog</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
