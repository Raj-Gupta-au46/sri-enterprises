import React from "react";
import { BsDot } from "react-icons/bs";

const Professional = () => {
  const arr = [
    {
      id: 1,
      text: "Chartered Accountants",
    },
    {
      id: 2,
      text: "Chartered Engineers",
    },
    {
      id: 3,
      text: "MBA’s",
    },
    {
      id: 4,
      text: "Lawyers and Sollcitors",
    },
    {
      id: 5,
      text: "Foreign Trade Policy Experts and Analysts",
    },
    {
      id: 6,
      text: "Experienced Professionals from PSUs and other experts from Corporate",
    },
  ];
  return (
    <section className=" main-container main-spacing grid grid-cols-2 gap-16 ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="common-transition hover:scale-105 w-full lean-image-animate h-48 object-cover rounded-xl overflow-hidden md:translate-y-3">
          <img src="/about-five.jpg" alt="" />
        </div>
        <div className="common-transition hover:scale-105 w-full lean-image-animate h-48 object-cover rounded-xl overflow-hidden translate-y-0 md:floating-y-animation">
          <img src="/about-two.jpg" alt="" />
        </div>

        <div className="common-transition hover:scale-105 w-full lean-image-animate h-48 object-cover rounded-xl overflow-hidden md:translate-y-2    ">
          <img src="/about-six.jpg" alt="" />
        </div>
        <div className="common-transition hover:scale-105 w-full lean-image-animate h-48 object-cover rounded-xl overflow-hidden translate-y-0 md:floating-y-animation ">
          <img src="/about-four.jpg" alt="" />
        </div>
      </div>
      <div className=" flex flex-col gap-7  ">
        <div className=" font-bold text-4xl  leading-10">
          Our team <span className="text-blue-400 ">Sri-Enterprises </span>
          comprises of dedicated professionals
        </div>
        <div className=" flex flex-col    ">
          <div className="flex flex-col gap-3 text-2xl text-gray-600">
            {arr.map((items, i) => (
              <p key={i} className="flex items-center ">
                <BsDot />
                {items?.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professional;
