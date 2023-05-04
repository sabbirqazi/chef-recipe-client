import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 my-10">
      <h2 className="text-5xl text-center my-20">
        Want to know, What's going on???
      </h2>
      <div className="flex lg:flex-row flex-col mb-20 gap-10 lg:gap-44">
        <div className="flex gap-4 items-center justify-center">
          <EnvelopeIcon className="h-10 w-10 text-black" />
          <h3 className="text-3xl font-semibold">Subscribe Our Newsletter!</h3>
        </div>
        <div className="flex gap-2 mx-10">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-96 max-w-xs"
          />
          <button className="btn btn-primary w-32">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
