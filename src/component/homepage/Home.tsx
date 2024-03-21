import React from "react";

const Home = () => {
  return (
    <section className="main-container ">
      <div className="flex gap-16 items-center justify-between main-spacing  ">
        <img className="lg:w-1/2 w-full" src="/hero-img.png" alt="" />
        <div className="flex flex-col lg:items-start gap-4 w-full">
          <div className="flex gap-2 font-semibold text-4xl text-start ">
            <h1 className=" ">WELCOME TO </h1>
            <h1 className="text-gray-500">SRI ENTERPRISES</h1>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4 w-full text-lg">
            <p className="text-start">
              Sri Enterprises a company, are Techno-commercial & legal
              professionals, providing consultancy and facilitation for Power
              and Transport sector projects.
            </p>

            <p className="text-start">
              Operating since last 3 decades, backed by 1000+ years of
              accumulated professional experience, we have generated more than
              1000 million USD, as value across various diverse sectors.
            </p>
            <p className="text-start">
              We at Sri Enterprises, are pioneers in our field, and dedicated
              towards enabling organizations to achieve true excellence with
              Knowledge Value and Growth.
            </p>
            <button className=" border border-r-red-500 bg-red-400 hover:bg-red-900 text-white rounded-md py-1 px-2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
