/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setChefsData(data));
  }, []);
  console.log(chefsData);
  return (
    <>
      <h1>Our Skilled Chefs</h1>
      <div className="lg:mx-28 mx-10 my-20 gap-16 grid grid-cols-1 lg:grid-cols-2 ">
        {chefsData[0]?.chefs?.map((chef) => (
          <div key={chef?.id} className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={chef?.chef_picture_url}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef?.chef_name}</h2>
              <p>{chef?.years_of_experience} years of experience</p>
              <p>{chef?.number_of_recipes} recipes</p>
              <p>{chef?.likes} likes</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"> View Recipes</button>
              </div>
            </div>
          </div>
          
        ))}
      </div>
    </>
  );
};

export default Chefs;
