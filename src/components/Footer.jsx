import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col justify-center items-center h-16 bottom-0">
      <div className="logo font-bold text-white text-2xl py-0">
        <span className="text-green-500"> &lt; </span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div className="flex">Created with ❤️ By Anushka</div>
    </div>
  );
};

export default Footer;
