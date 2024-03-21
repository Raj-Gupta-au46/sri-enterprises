import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className=" border-b-2 sticky z-[90] top-0 bg-white shadow-sm">
        <div className="main-container  flex gap-2 w-full  items-center justify-between ">
          <div>
            <img className=" w-52" src="/logo.jpg" alt="" />
          </div>
          <div className=" flex gap-4  font-semibold text-primary text-sky-500 cursor-pointer">
            <Link href="/#home" className="hover:text-blue-800">
              Home
            </Link>
            <Link href="/#about" className="hover:text-blue-800">
              About
            </Link>
            <div className="hover:text-blue-800">Contact</div>
            <div className="hover:text-blue-800">Service</div>
            <div className="hover:text-blue-800">Download</div>
          </div>
          <div className=" flex items-center gap-1 bg-pink-600  font-semibold text-white border rounded-md px-2 py-1 hover:bg-pink-900 cursor-pointer">
            SignIn <CgProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
