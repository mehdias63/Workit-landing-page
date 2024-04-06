import React from "react";

export default function Button({ className, text }) {
  return (
    <button
      className={`${className} px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg font-bold leading-7 cursor-pointer tracking-[-0.01rem] lg:tracking-[-0.01125rem] text-black hover:bg-dark-purple hover:text-light-green border-2 border-light-green`}
    >
      {text}
    </button>
  );
}
