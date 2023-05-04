/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../../../providers/AuthProvider";
const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);
  const { loading} = useContext(AuthContext);
  if(loading){
    return   <div className='text-center mt-5'><progress className="progress w-56"></progress></div>
}
  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setChefsData(data));
  }, []);

  return (
    <>
      <h1>Our Skilled Chefs</h1>
      <div className="lg:mx-36 mx-10 my-20 gap-16 grid grid-cols-1 lg:grid-cols-2 ">
        {chefsData[0]?.chefs?.map((chef) => (
          <div key={chef?.id} className="card glass">
            <figure>
              <img
                src={chef?.chef_picture_url}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{chef?.chef_name}</h2>
              <p className="text-2xl">Experience:{chef?.years_of_experience} years+</p>
              <p className="text-2xl">Recipes: {chef?.number_of_recipes} +</p>
              <p className="flex gap-1"> <HandThumbUpIcon className="h-8 w-8 text-amber-500" /><span className="text-xl">{chef?.likes}+ </span></p>
              <div className="card-actions justify-center mt-2">
              <Link to={`/${chef?.id}`}>
              <button className="btn btn-warning btn-wide">View Recipes</button>
            </Link>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </>
  );
};

export default Chefs;
