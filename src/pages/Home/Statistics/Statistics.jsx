import React from "react";

const Statistics = () => {
  return (
    <>
      <h2 className="text-center my-16 text-5xl">Our Journey</h2>
      <div className="flex flex-col lg:flex-row justify-around mb-16 gap-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-base-100 py-10 ">
        <div className="flex justify-center items-center mx-10 p-10 gap-2 hover:bg-amber-500 rounded">
          <img
            className="h-28 w-28"
            src={"https://i.ibb.co/0yd35Kz/cutlery-svgrepo-com.png"}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-4xl pt-3 font-bold text-white">1000+</p>
            <p className="text-2xl text-bold pt-3 text-white">Success</p>
          </div>
        </div>
        <div className="flex  justify-center items-center  mx-10 p-10 gap-2  hover:bg-amber-500 rounded">
          <img
            className="h-28 w-28"
            src={
              "https://i.ibb.co/yFjsHZz/hot-dog-food-and-restaurant-svgrepo-com.png"
            }
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-4xl pt-3 font-bold text-white">500+</p>
            <p className="text-2xl text-bold pt-3 text-white">Recipes</p>
          </div>
        </div>
        <div className="flex  justify-center items-center mx-10  p-10 gap-2  hover:bg-amber-500 rounded">
          <img
            className="h-28 w-28"
            src={"https://i.ibb.co/svHX3CP/savings-money-svgrepo-com.png"}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-4xl pt-3 font-bold text-white">300+</p>
            <p className="text-2xl text-bold pt-3 text-white">Donations</p>
          </div>
        </div>
        <div className="flex  justify-center items-center mx-10 p-10 gap-2  hover:bg-amber-500 rounded">
          <img
            className="h-28 w-28"
            src={"https://i.ibb.co/qNbDWLm/food-pin-svgrepo-com.png"}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-4xl pt-3 font-bold text-white">200+</p>
            <p className="text-2xl text-bold pt-3 text-white">Outlet</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
