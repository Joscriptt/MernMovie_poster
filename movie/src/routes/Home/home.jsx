import React from "react";

function home() {
  return (
    <div className="">
      <div className="lg:mt-16 mt-24  px-3">
        <div className="lg:flex items-center justify-around">
          <div className="lg:w-1/2">
            <h1 className="lg:text-7xl capitalize text-center lg:text-left text-4xl max-w-3xl text-white font-black ">
              The number one place where fans get latest move update with out
              <span className="text-transparent  bg-gradient-to-r from-[#0089f9] to-[#00ffe5] bg-clip-text ">
                {" "}
                blog post
              </span>
            </h1>

            <div className="lg:w-1/2 text-center lg:text-left mt-9">
              <p className="text-neutral-400 text-xl">
                Hi, Am Joscript and am making a youtube video right now and you
                can check me out on my youtube channel
              </p>
            </div>

            <div className="mt-11 flex  gap-x-5 flex-col  lg:flex-row ">
              <button className="bg-white w-full lg:w-fit text-black p-3 rounded-md lg:rounded-full font-semibold px-9">
                View my channel
              </button>
              <button className="border mt-6 lg:mt-0 border-neutral-700 text-neutral-300 p-3 rounded-md lg:rounded-full text-lg font-semibold px-9">
                My Resume
              </button>
            </div>

            {/* <h2 className="lg:text-7xl lg:w-7/12 text-4xl lg:text-left text-center    font-gilroyExt  dark:text-gray-300 text-gray-800 capitalize">
              Finding{" "}
              <span className="text-transparent  bg-gradient-to-r from-[#0089f9] to-[#00ffe5] bg-clip-text ">
                Missing people
              </span>{" "}
              becomes Easier
            </h2> */}
          </div>

          <div className="1/2">
            <img
              className="w-[40rem] h-auto object-cover"
              src="/img/ride1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
