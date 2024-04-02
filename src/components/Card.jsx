import React from "react";

export default function Card({ number, title, text }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row lg:flex-col gap-5">
      <div className="w-12 h-[2.875rem] rounded-full border-2 leading-[2.875rem] text-center lg:w-14 lg:h-14 lg:leading-[3rem] font-fraun text-dark-purple text-xl lg:text-2xl font-semibold ">
        {number}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-fraun text-dark-purple">{title}</h2>
        <p className="text-dark-gray">{text}</p>
      </div>
    </div>
  );
}
