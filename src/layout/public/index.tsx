import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterOne from "./FooterOne";

type props = {
  children: React.ReactNode;
};
const PublicLayout = ({ children = <></> }: props) => {
  return (
    <>
      <main className="w-full relative">
        <Navbar />
        {children}
        {/* <Footer /> */}
        <FooterOne />
      </main>
    </>
  );
};

export default PublicLayout;
