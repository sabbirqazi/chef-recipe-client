import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const RecipeDetails = ({recipe}) => {

  const [favoriteIds, setFavoriteIds] = useState([]);
  const isFavorite = favoriteIds.includes(recipe.id);
  const handleFavoriteClick = () => {
    setFavoriteIds([...favoriteIds, recipe.id]);
    toast.success("Added to favorites!");
  };
  return (
    <div>
          <Toaster />
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Dish: {recipe?.name}</h2>
          <p className="text-xl font-semibold"><span className="text-2xl">Ingredients:</span> {recipe?.ingredients}</p>
          <p className=" text-xl font-semibold"><span className="text-2xl">Cooking Method:</span>{recipe?.cooking_method}</p>
          <p className=" text-xl font-semibold"><span className="text-2xl">Rating:</span> {recipe?.rating}</p>
          <div className="card-actions justify-end">
            <button className=" btn btn-primary" disabled={isFavorite} onClick={handleFavoriteClick}>
              {isFavorite ? "Favorited" : "Favorite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
