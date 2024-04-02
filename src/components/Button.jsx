import React from "react";

export default function Button({ className, text }) {
  return (
    <button
      className={`${className} px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg font-bold leading-7 cursor-pointer text-black hover:bg-dark-purple hover:text-light-green hover:border-2 hover:border-light-green`}
    >
      {text}
    </button>
  );
}
