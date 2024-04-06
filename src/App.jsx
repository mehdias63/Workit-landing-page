import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="max-w-[90rem] min-h-screen mx-auto font-man overflow-hidden">
      <div className="bg-dark-purple text-white h-[30.10669rem] md:h-[33.76475rem] lg:h-[45.625rem]">
        <header className="flex justify-between p-6 bg-purple ">
          <img src="/images/logo-light.svg" />
          <p className="border-b-2 border-light-green p-1 text-base lg:text-lg font-bold leading-8 tracking-[-0.01rem] lg:tracking-[-0.01125rem] hover:text-light-green cursor-pointer">
            Apply for access
          </p>
        </header>
        <section className="relative flex flex-col items-center">
          <h1 className="font-fraun text-[3.125rem] md:text-[3.75rem] lg:text-[5rem] font-semibold leading-[4.125rem] md:leading-[4.75rem] lg:leading-[6rem] mt-8">
            Data <span className="border-b-4 border-light-green">tailored</span>{" "}
            to
            <br /> your needs.
          </h1>
          <Button className="bg-light-green mt-8 lg:mt-16" text="Learn more" />
            <img
              src="/images/bg-pattern-2.svg"
              className="absolute hidden md:block -right-20  lg:-right-10 bottom-[-7rem]"
            />
            <img
              src="/images/bg-pattern-1.svg"
              className="absolute hidden md:block left-[-11rem] lg:left-[-9rem]"
            />
        </section>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/images/image-hero.webp"
          className="absolute h-[10.56125rem] md:h-[16.98981rem] lg:h-[25.3125rem]"
          alt="hero"
        />
      </div>
      <article className="mt-36 lg:mt-60 mb-8 lg:flex justify-center items-center lg:gap-1">
        <Card
          number="1"
          title="Actionable insights"
          text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        />
        <Card
          number="2"
          title="Data-driven decisions"
          text="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
        />
        <Card
          number="3"
          title="Always affordable"
          text="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
        />
      </article>
      <main className="relative flex flex-col justify-center items-center md:items-start md:p-8 md:pl-24 lg:pl-8 lg:p-14 ">
        <div>
          <img
            src="/images/image-founder.webp"
            className="h-[17.5625rem] lg:h-[29.8125rem]"
          />
        </div>
        <div className="relative bg-dark-purple text-white md:max-w-[32.125rem] lg:max-w-[45.625rem] p-8 md:p-10 mt-[-4rem] md:ml-[14rem] md:mt-[-7rem] lg:ml-[25rem] lg:mt-[-18rem]">
          <h3 className="font-fraun text-[2rem] md:text-5xl lg:text-[3.5rem] font-semibold leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] mt-4">
            Be the first to test
          </h3>
          <p className="text-base lg:text-lg leading-7 lg:leading-8 my-6 ">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <Button
            className="bg-light-green text-black mt-4"
            text="Apply for access"
          />
          <img src="/images/bg-pattern-3.svg" className="hidden md:block absolute left-[18rem] bottom-[-5rem] lg:left-[25rem]" />
        </div>
      </main>
      <footer className="flex flex-col justify-center items-center gap-6 p-6 my-10">
        <img src="/images/logo-dark.svg" />
        <div className="flex gap-8 mt-8">
          <img
            src="/images/icon-facebook.svg"
            alt="facebook"
            className="hover:bg-dark-purple cursor-pointer"
          />
          <img
            src="/images/icon-twitter.svg"
            alt="twitter"
            className="hover:bg-dark-purple cursor-pointer"
          />
          <img
            src="/images/icon-instagram.svg"
            alt="instagram"
            className="hover:bg-dark-purple cursor-pointer"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
