import React from "react";

const ImageHandler = () => {
  const imageArr = [
    {
      id: 1,
      img: "/service1.webp",
      text: "Happy",
    },
    {
      id: 2,
      img: "/service2.webp",
      text: "Balancing",
    },
    {
      id: 3,
      img: "/service3.jpg",
      text: "Experts",
    },
    {
      id: 4,
      img: "/service4.jpg",
      text: "Management",
    },
    {
      id: 5,
      img: "/service5.jpg",
      text: "Experience",
    },
    {
      id: 6,
      img: "/service6.jpg",
      text: "Innovative",
    },
  ];

  return (
    <section className="main-container ">
      <div className=" grid grid-cols-3 gap-6  py-20 px-10 ">
        {imageArr?.map((items, i) => (
          <div
            key={items?.id}
            className=" group relative w-full border hover:scale-105 delay-animation "
          >
            <img
              className="h-[17rem] w-full object-cover "
              src={items?.img}
              alt=""
            />
            <div className=" absolute common-transition text-white top-0 flex h-full w-full justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/40 ">
              <div className="flex items-center gap-3">
                <div className="flex items-center">{items.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageHandler;
