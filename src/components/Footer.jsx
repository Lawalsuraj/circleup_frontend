import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="container mx-auto text-center space-y-4">
        <h3 className="text-xl font-bold">CircleUp</h3>
        <p>© {new Date().getFullYear()} CircleUp. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
