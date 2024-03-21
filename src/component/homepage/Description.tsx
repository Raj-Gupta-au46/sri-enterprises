import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Collapse } from "@/component/core";

const Description = () => {
  const [curAnswer, setCurAnswer] = useState(0);
  const [curIndex, setCurIndex] = useState(0);

  const faqPoints = [
    {
      question: "End to end Consulting for Tendering",
      answer:
        "Whether information or research, Sri Enterprises promises for an easy process of Tender facilitation flow. Every growing economy has dynamic govt policies and related notifications. Our knowledge capital and promptness at Sri Enterprises, keep our clients abreast on all.",
    },
    {
      question: "​Handholding",
      answer:
        "Handholding Clients is our forte in our Consulting practice and SRI ENTERPRISES follows a religious practice of facilitating, coordinating and assisting in a way, that no stone is left unturned to help our clients.",
    },
    {
      question: "Documentation and Representation",
      answer:
        "We also undertake all such documentation/representational work, that is in line with various government policies, guidelines and laws. Over and above we endeavour to present the company’s case in a manner that is conducive to the developmental objectives of the government as well as clients interests.",
    },
    {
      question: " ​Success Partner Empowerment",
      answer:
        "We, at Sri Enterprises, believe in facilitating our clients, with every legal thing under the sun to facilitate Tender procurement and hereby empower them to look at their larger work interests.",
    },
    {
      question: "Deemed Export Services on Power Projects",
      answer:
        "Under provisions of Foreign Trade Policy (FTP) 2009-2014 Ministry of Commerce, companies are to be incentivised  in terms of Exemption / Remission of Excise & Customs Duties, paid on capital goods for the Power Projects (Such supplies qualify as Deemed Exports. These incentives can account Fiscal Optimization that considerably lowers down the capital cost of the project)",
    },
    {
      question:
        "Techno Commercial (From the Concept to Commissioning) for Hydro Projects",
      answer:
        "Sri Enterprises  association with experts in technical and commercial fields, allows us to be  the most trusted Turnkey  service provider. Retired officials fully armed with technical and commercial background expertise and having an experience of working on several Hydro Power Projects of various sizes and locations, has developed a niche capability for setting up of the entire Hydro Power Project.",
    },
  ];
  return (
    <section className=" main-container py-20">
      <div className="grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className=" flex flex-col gap-7">
            <div className="font-semibold ">
              <h1 className="text-4xl text-gray-700">
                All you need is Sri-Enterprises enabled Turnkey...
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center  ">
              <p className="flex flex-col gap-10 justify-center items-center ">
                Sri-Enterprises offerings cover a broad range of services that
                involves evaluation (for best possible incentives for clients),
                documentation as per the latest policy & procedures, follow up
                with relevant authorities, faster realisation of claims and
                overall agile consulting and legal services.
              </p>
            </div>
            <div className="border shadow-lg rounded-md ">
              {faqPoints?.map((_, i) => (
                <div key={i} className="">
                  <div
                    onClick={() => setCurAnswer(i)}
                    className={`p-3 text-blue relative text-sm md:text-base font-medium cursor-pointer flex items-center justify-between ${
                      faqPoints?.length - 1 === i
                        ? ""
                        : "border-b-2 border-quaternary/20"
                    }`}
                  >
                    {_.question}
                    <div className="min-w-[1.5rem] flex justify-end items-center">
                      <MdKeyboardArrowDown
                        className={` text-quaternary text-lg md:text-xl common-transition ${
                          curAnswer === i ? "rotate-[180deg]" : "rotate-0"
                        }`}
                      />
                    </div>
                  </div>
                  <Collapse open={curAnswer === i}>
                    <p className="p-3 text-sm  border-b-2 border-quaternary/20">
                      {_.answer}
                    </p>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full relative h-full order-1 lg:order-2">
          <div className="h-full flex">
            {/* {photoGallery.map((data, i) => ( */}
            <div className="relative pb-10 md:pb-0 w-full flex items-center h-full">
              <div className="overflow-hidden rounded-l-[2rem] h-64 md:h-[35rem] w-3/4 md:w-3/5 lg:w-2/3">
                <img
                  src="./about-five.jpg"
                  alt=""
                  className="h-full object-cover object-right hover:scale-105 delay-animation"
                />
              </div>
              {/* new div */}
              <div className="absolute flex justify-end md:right-1/4 lg:right-10 -bottom-10 md:-bottom-10 lg:-bottom-20 w-full">
                <div className="w-44 md:w-2/5 bg-white p-3 md:p-4 rounded-xl">
                  <img
                    src="/about-six.jpg"
                    alt=""
                    className="w-full md:h-60 h-44 xl:h-56 2xl:h-64 object-cover rounded-tr-[3rem] hover:scale-105 delay-animation"
                  />
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
        {/* <div className="absolute -bottom-6 lg:bottom-0 lg:py-5 w-full md:w-2/3 rounded-b-3xl">
            <div className="flex items-center justify-center gap-2 w-full">
              {[...Array(photoGallery.length)].map((data, i) => (
                <div
                  className={`w-12 h-1.5 ${
                    currentIndex === i ? "bg-quinary" : "bg-light"
                  } rounded-lg`}
                  key={i}
                ></div>
              ))}
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Description;
