/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../providers/AuthProvider";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LazyLoad from "react-lazy-load";
const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);
  const [imgLoad, setImgLoad] = useState(false);
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <progress className="progress w-56" value="50" max="100"></progress>
      </div>
    );
  }
  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-side-sabbirqazi.vercel.app/allData"
    )
      .then((response) => response.json())
      .then((data) => setChefsData(data));
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoad(true);
    };
    img.src = chefsData[0]?.chefs?.chef_picture_url;
    setImgLoad(false);
  }, [chefsData[0]?.chefs]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center my-10 text-5xl">Our Skilled Chefs</h1>
        <div className="my-10 mx-10 grid grid-cols-1 lg:grid-cols-2 justify-between gap-20">
          {chefsData[0]?.chefs?.map((chef) => (
            <div key={chef?.id} className="card glass w- lg:w-96">
              <LazyLoadImage
                src={chef?.chef_picture_url}
                className="card-img-top"
                loading="lazy"
                effect="blur"
                alt="Chef"
                placeholderSrc={chef?.chef_picture_url.blurhash}
              />

              <div className="card-body">
                <h2 className="card-title text-3xl">{chef?.chef_name}</h2>
                <p className="text-2xl">
                  Experience:{chef?.years_of_experience} years+
                </p>
                <p className="text-2xl">Recipes: {chef?.number_of_recipes} +</p>
                <p className="flex gap-1">
                  {" "}
                  <HandThumbUpIcon className="h-8 w-8 text-black" />
                  <span className="text-xl">{chef?.likes}+ </span>
                </p>
                <div className="card-actions justify-center mt-2">
                  <Link to={`/${chef?.id}`}>
                    <button className="btn btn-primary btn-wide">
                      View Recipes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chefs;
