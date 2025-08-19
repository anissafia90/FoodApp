import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiHeart } from "react-icons/hi2";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get("https://foodapp-08ud.onrender.com/recipe");
      setRecipes(res.data);
    };

    const fetchFavorites = async () => {
      const res = await axios.get(
        "https://foodapp-08ud.onrender.com/user/favorites",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFavorites(res.data.favorites);
    };

    fetchRecipes();
    fetchFavorites();
  }, []);

  const toggleFavorite = async (recipeId) => {
    try {
      const res = await axios.put(
        `https://foodapp-08ud.onrender.com/user/favorite/${recipeId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFavorites(res.data.favorites);
    } catch (err) {
      console.error("Favorite toggle error:", err);
    }
  };

  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>

      <div className="cards-wrapper">
        {recipes.map((recipe) => {
          const isFav = favorites.includes(recipe._id);
          return (
            <div className="recipe-card" key={recipe._id}>
              <img
                className="w-100"
                src={`https://foodapp-08ud.onrender.com/public/images/${recipe.coverImage}`}
                alt={recipe.title}
              />
              <h4 className="mt-4">{recipe.title}</h4>
              <p>{recipe.ingredients}</p>
              <HiHeart
                className="icons"
                onClick={() => toggleFavorite(recipe._id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllRecipes;
