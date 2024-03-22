import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";

const Final = () => {
  return (
    <section className="bg-fixed bg-cover bg-black text-white py-20 ">
      <section className=" main-container grid grid-cols-2 gap-10 ">
        <section className="">
          <div className="flex flex-col gap-5">
            <div className="font-bold text-white text-4xl tracking-wide leading-[3rem]">
              Get A No Obligation Consulting Call With Sri Enterprise Experts
            </div>
            <div className="font-semibold tracking-wide leading-[2rem]">
              We Are Delighted To Offer You A Free Consultation To Discuss Your
              Unique Needs And Explore How Our Services Can Benefit You.
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-10">
            <div className="flex flex-col gap-4 justify-center items-center border border-white bg-blue-500 rounded-tr-[2rem] rounded-bl-[2rem] p-4">
              <span className="bg-white rounded-full p-2 text-black">
                <IoIosMail />
              </span>
              <p className="text-sm text-center">
                srienterprisespvt @gmail.com
              </p>
            </div>
            <div className="border border-white">
              <FaPhoneAlt />
              011-494743210
            </div>
            <div className="border border-white">
              <HiOutlineBuildingOffice2 />
              203, 2-A/3, ASAF ALI Road, Kundan Mention Central Delhi, New Delhi
              110002
            </div>
          </div>
        </section>
        <section>Form Section</section>
      </section>
    </section>
  );
};

export default Final;
