import React from "react";
import { Link } from "react-router-dom";

function about() {
  return (
    <div className="px-5 max-w-3xl mx-auto">
      <div></div>
      <h1 className="text-5xl font-bold mt-10 text-white">About Joscript</h1>
      <p className="mt-8 text-xl text-white">
        Frontend Developer at Apple who loves minimal design, Grids & good
        coffee.
      </p>
      <div className=" flex justify-center my-24">
        <img className="w-fit rounded-lg" src="/img/img12.png" alt="" />
      </div>

      <div className="mt-14">
        <p className="text-[#6e7073] text-[18px] ">
          Joscript is a Fullstack developer based in the US with over 2 years of
          experience in the field. He has worked for both small startups and
          large corporations, specializing in designing user interfaces for web
          and mobile applications. Joscript is known for his ability to create
          intuitive and engaging user experiences that meet business objectives.
          In addition to his design skills, Joscript is also proficient in
          front-end development, which allows him to create prototypes and test
          his designs quickly. He is a strong advocate for user-centered design
          and is always looking for ways to improve the user experience.
        </p>
        <p className="text-[#6e7073] text-[18px] mt-6">
          Joscript has a bachelor's degree in Software Engineering from a top
          university in the US and is continuously learning about new
          technologies and design trends. He is an active member of the design
          community and attends various design conferences and meetups. When not
          designing, Joscript enjoys playing guitar and exploring new coffee
          shops in his area. He is a strong believer in work-life balance and
          ensures he takes breaks to recharge his creative batteries. He also
          volunteers at a local animal shelter on the weekends. Joscript's
          portfolio includes designs for well-known brands such as Nike, Apple,
          and Coca-Cola. His work has been featured in various design
          publications, and he has won several design awards.
        </p>

        <p className="text-[#6e7073] text-[18px] mt-6">
          Joscript is a team player and enjoys collaborating with developers,
          product managers, and other designers. He is a problem solver and
          enjoys taking on complex design challenges. Joscript's ultimate goal
          is to design products that make people's lives easier and more
          enjoyable. This text was written by AI.
        </p>
      </div>

      <div className="mt-10 flex gap-x-5">
        <button className="font-bold bg-[#1C1C1C]/20 border-neutral-700 text-neutral-100 border p-2 px-5 rounded-md">
          Get in touch
        </button>

        <button className=" font-bold bg-[#1C1C1C] border-neutral-700 text-neutral-100 border p-2 px-5 rounded-md text-sm">
          {/* E-Mail */}
          <a href="mailto:Josephjames805@gmail.com">Click to Send an Email</a>
        </button>
      </div>
    </div>
  );
}

export default about;
