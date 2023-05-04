/* eslint-disable no-unused-vars */
import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/vegetables-with-salt-corn-cob_1220-688.jpg?w=1380&t=st=1683148255~exp=1683148855~hmac=0cfd66c2497dd24a88cfdecd0976edd9ff25fedd8d44c67fafedaa2a85d03c1e")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center mr-10 text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-center text-base-500 font-bold">
             Discover Yourself <br />
             With Us
            </h1>
            <p className="mb-5 text-xl font-semibold text-center">
              Providing Italian various easy-to-follow recipe all over the world and
              five star chefs to make at home. <br />
              Learn how to make your cooking testier and easier with us.
            </p>
            <button className="btn btn-wide btn-main font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
