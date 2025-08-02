import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { CiHeart } from "react-icons/ci";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    // Fetch recipes from an API or a local source
    const fetchRecipes = () => {
      axios
        .get("http://localhost:5000/recipe")
        .then((response) => {
          setRecipes(response.data);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    };
    fetchRecipes();
  }, []);
  return (
    <div className="recipes-container">
      <h2>All Recipes</h2>
      <div className="cards-wrapper">
        {recipes.map((recipe) => (
          <div key={recipe?.id} className="recipe-card">
            <h3>{recipe?.title}</h3>
            <p>{recipe?.instructions}</p>
            <small>{recipe?.ingredients}</small>
            <div className="icons">
              <CiHeart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllRecipes;
