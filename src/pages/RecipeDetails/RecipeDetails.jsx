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
          <h2 className="card-title">{recipe?.name}</h2>
          <p>Ingredients: {recipe?.ingredients}</p>
          <p>Cooking Method: {recipe?.cooking_method}</p>
          <p>Rating: {recipe?.rating}</p>
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
