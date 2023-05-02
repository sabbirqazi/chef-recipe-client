/* eslint-disable no-unused-vars */
import React from 'react';

const Hero = () => {
    return (
        <div>
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/side-view-pizza-with-salami-ham-green-peppers-tomatoes-black-olives-cheese-table_141793-2996.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-left text-amber-500 font-bold">Your Everyday_ <br />Cooking Inspiration</h1>
      <p className="mb-5 text-xl text-left">Providing various easy-to-follow recipe all over the world and five star chefs to make at home. <br />
      Learn how to make your cooking testier and easier with us.</p>
      <button className="btn btn-wide">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;