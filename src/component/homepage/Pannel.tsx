import React from "react";

const Pannel = () => {
  return (
    <section className="   bg-[url('/about-two.jpg')] bg-fixed bg-cover  ">
      <div className="bg-black/70 text-white">
        <div className="main-container py-12 flex flex-col gap-8 ">
          <div className="flex items-center justify-center ">
            <h1 className="font-bold text-5xl">Panel Of Experts</h1>
          </div>
          <div>
            <p className="text-lg text-center text-gray-300">
              The self motivated and highly professional Sri Enterprises team
              works in unison to achieve meaningful results, and effective
              solutions for our clients. Our team of Techno-friendly
              professionals, with over three decade of combined expertise helps
              us provide end to end Solutions with broad working capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pannel;
