/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

const Recipe = ({ children }) => {
  const [banners, setBanners] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://chef-recipe-hunter-server-side-sabbirqazi.vercel.app/allData/${id}`
    )
      .then((response) => response.json())
      .then((data) => setBanners(data));
  }, []);

  console.log(banners.items);
  return (
    <div>

      <div className="lg:mx-28 mx-5 my-10 flex flex-col justify-center items-center">
        <div><h2 className="text-3xl font-semibold text-center mb-10">Welcome To View Recipes</h2></div>
        {banners?.items?.details?.map((banner) => (
        
             <div
            key={banner?.id}
            className="card card-side bg-base-100 shadow-xl flex flex-col chef-banner-small lg:chef-banner-large"
          >
            <figure>
              <img  className="object-fit" src={banner?.chef_picture_url} alt="Chef" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-2xl font-semibold text-center">Name: {banner?.chef_name}</h2>
              <p className="text-xl font-semibold">Experience: {banner?.years_of_experience} years of experience</p>
              <p className="text-xl font-semibold">Recipes: {banner?.number_of_recipes} recipes</p>
              <p className="text-xl font-semibold flex gap-2 items-center justify-center"> <span><HandThumbUpIcon className="h-8 w-8 text-amber-500" /></span> Likes: {banner?.likes}+</p>
            </div>
          </div> 
        ))}
      </div>

      <div className="lg:mx-20 mx-5 my-20 gap-10 grid grid-cols-1">
        {banners?.items?.recipes?.map((recipe) => (
          <RecipeDetails key={recipe?.id} recipe={recipe}></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
