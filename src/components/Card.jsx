import React from "react";

export default function Card({ number, title, text }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row lg:flex-col">
      <div>{number}</div>
      <div className="flex flex-col justify-center items-center">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
