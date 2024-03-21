import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const FooterOne = () => {
  const quickLinks = [
    {
      id: 1,
      title: "Home",
      link: "#",
    },
    {
      id: 2,
      title: "About",
      link: "#",
    },
    {
      id: 3,
      title: "Contact",
      link: "#",
    },
    {
      id: 4,
      title: "Service",
      link: "#",
    },
    {
      id: 5,
      title: "Downloads",
      link: "#",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-3 items-center  py-9 justify-center w-full border">
        <div className="flex justify-center items-center">
          <img className="w-80 " src="/logo.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-black">Quick Links</h1>
          <div>
            {quickLinks?.map((item, i) => (
              <div key={item?.id} className="">
                <ul className=" ">
                  <li className="flex gap-1 items-center hover:text-pink-400 ">
                    <small className="flex items-center">
                      <IoMdArrowDropright className="hover:rotate-90 common-transition text-lg" />
                      <Link href={item?.link}>{item?.title}</Link>
                    </small>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          {/* <ul>
              <Link href="/#home">
                <li className="flex gap-1 items-center hover:text-pink-400 ">
                  <IoMdArrowDropright className="hover:rotate-90 common-transition text-lg" />
                  Home
                </li>
              </Link>
              <li className="flex gap-1 items-center hover:text-pink-400 ">
                <IoMdArrowDropright className="hover:rotate-90 common-transition text-lg" />
                About
              </li>
              <li className="flex gap-1 items-center hover:text-pink-400 ">
                <IoMdArrowDropright className="hover:rotate-90 common-transition text-lg" />
                Contact
              </li>
              <li className="flex gap-1 items-center hover:text-pink-400 ">
                <IoMdArrowDropright className="hover:rotate-90 common-transition text-lg" />
                Service
              </li>
              <li className="flex gap-1 items-center hover:text-pink-400 ">
                <IoMdArrowDropright className="hover:rotate-90 common-transition text-lg" />
                Download
              </li>
            </ul> */}
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-semibold text-black">Get In Touch</p>
          <div className="text-gray-500">
            <p>203, 2-A/3,</p>
            <p>ASAF ALI ROAD,KUNDAN MENTION </p>
            <p>CENTRAL DELHI,NEW DELHI - 110002</p>
          </div>
          <div className="flex gap-2 text-3xl">
            <FaFacebook /> <FaInstagram /> <FaXTwitter /> <CgMail />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="border border-green-300 flex px-10 py-4 items-center justify-between  w-full">
        © 2024 Sri Enterprises. All rights reserved | Terms & Condition |
        Privacy Policy
        <div>Developed & Designed By Raj Gupta</div>
      </div>
    </section>
  );
};

export default FooterOne;
