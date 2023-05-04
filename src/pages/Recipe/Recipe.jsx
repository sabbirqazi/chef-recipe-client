/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

const Recipe = ({ children }) => {
  const [banners, setBanners] = useState({});
  const { id } = useParams();


  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-side-sabbirqazi.vercel.app/allData/${id}`)
      .then((response) => response.json())
      .then((data) => setBanners(data));
  }, []);


  console.log(banners.items);
  return (
    <div>
    
      <div className="mx-28 my-10">
        {banners?.items?.details?.map((banner) => (
          <div
            key={banner?.id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img src={banner?.chef_picture_url} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{banner?.chef_name}</h2>
              <p>{banner?.years_of_experience} years of experience</p>
              <p>{banner?.number_of_recipes} recipes</p>
              <p>{banner?.likes} likes</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-20 my-20 gap-10 grid grid-cols-1">
        {banners?.items?.recipes?.map((recipe) => (
          <RecipeDetails 
          key={recipe?.id}
          recipe ={recipe}
          ></RecipeDetails>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
