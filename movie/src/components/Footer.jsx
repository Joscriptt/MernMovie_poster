import React from "react";

import { useLocation } from "react-router-dom";

function Footer() {
  const path = useLocation();

  // console.log(path.pathname);
  return (
    <footer className={`${path.pathname == "/blog" && "hidden"} `}>
      <div className=" mt-10 bg-gradient-to-r from-[#0089f9] to-[#00ffe5] w-full h-auto p-5 rounded-t-3xl  place-items-center ">
        <div className="lg:grid grid-cols-4 sm:grid-cols-2   mt-7 lg:justify-items-center">
          <div className="flex-col">
            <h1 className="lg:text-6xl text-3xl font-extrabold  ">Joscript</h1>
            <p className="text-neutral-200 mt-4 text-lg max-w-xs">
              Full time react enthusiast making our world{" "}
            </p>
          </div>

          <div className="mt-14 lg:mt-0">
            <ul className="leading-8">
              <h1 className="text-2xl font-extrabold ">Contact</h1>
              <li className="mt-4 ">Email Joscript</li>
              <li>About Joscript</li>
            </ul>
          </div>
          <div className="mt-14 lg:mt-0">
            <ul className="leading-8">
              <h1 className="text-2xl font-extrabold">Site Map</h1>
              <li className="mt-4 leading-8">Home</li>
              <li>Blog</li>
              <li>Works</li>
            </ul>
          </div>
          <div className="">
            <img
              className="lg:w-72 w-32  mt-7 lg:mt-0"
              src="/img/riding.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
