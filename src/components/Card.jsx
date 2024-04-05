import React from "react";

export default function Card({ number, title, text }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row lg:flex-col gap-5 m-4 md:m-1 lg:m-0 md:p-6 lg:p-0 lg:w-1/3">
      <div className="w-12 h-[2.875rem] rounded-full border-2 text-center md:w-13 md:h-13 font-fraun text-dark-purple text-xl lg:text-2xl font-semibold flex justify-center items-center ">
        {number}
      </div>
      <div className="flex flex-col justify-center items-center md:items-start lg:items-center md:ml-6 lg:ml-0">
        <h2 className="font-fraun text-dark-purple text-[1.75rem] font-semibold leading-9 lg:leading-10">
          {title}
        </h2>
        <p className="text-dark-gray text-base lg:text-lg leading-7 lg:leading-8 text-center md:text-left lg:text-center my-6 max-w-[21.4375rem] md:max-w-[30.8125rem] lg:max-w-[22.125rem]">
          {text}
        </p>
      </div>
    </div>
  );
}
