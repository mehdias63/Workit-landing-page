import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="max-w-[90rem] min-h-screen mx-auto font-man">
      <div className="bg-dark-purple text-white h-[30.10669rem] md:h-[33.76475rem] lg:h-[45.625rem]">
        <header className="flex justify-between p-6 bg-purple ">
          <img src="/images/logo-light.svg" />
          <p className="border-b-2 border-light-green p-1 text-base lg:text-lg font-bold leading-8 tracking-[-0.01rem] lg:tracking-[-0.01125rem] hover:text-light-green cursor-pointer">
            Apply for access
          </p>
        </header>
        <section className="flex flex-col items-center">
          <h1 className="font-fraun text-[3.125rem] md:text-[3.75rem] lg:text-[5rem] font-semibold leading-[4.125rem] md:leading-[4.75rem] lg:leading-[6rem] mt-8">
            Data <span className="border-b-4 border-light-green">tailored</span>{" "}
            to
            <br /> your needs.
          </h1>
          <Button className="bg-light-green mt-8 lg:mt-16" text="Learn more" />
        </section>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/images/image-hero.webp"
          className="absolute h-[10.56125rem] md:h-[16.98981rem] lg:h-[25.3125rem]"
          alt="hero"
        />
      </div>
      <article className="mt-36 lg:mt-60 mb-8 lg:flex">
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
      <main className="flex flex-col justify-center items-center md:items-start md:p-6 lg:p-40">
        <div>
          <img
            src="/images/image-founder.webp"
            className="h-[17.5625rem] lg:h-[29.8125rem]"
          />
        </div>
        <div className="bg-dark-purple text-white h-[23.4375rem] lg:h-[25.8125rem] mt-[-5rem] md:mt-[-8.5rem] md:ml-[11.5rem] lg:mt-[-19rem] lg:ml-[25rem]">
          <h3 className="font-fraun">Be the first to test</h3>
          <p>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <Button
            className="bg-light-green text-black"
            text="Apply for access"
          />
        </div>
      </main>
      <footer className="flex flex-col justify-center items-center gap-6 p-6">
        <img src="/images/logo-dark.svg" />
        <div className="flex gap-8">
          <img src="/images/icon-facebook.svg" alt="facebook" />
          <img src="/images/icon-twitter.svg" alt="twitter" />
          <img src="/images/icon-instagram.svg" alt="instagram" />
        </div>
      </footer>
    </div>
  );
}

export default App;
