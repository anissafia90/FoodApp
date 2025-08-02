import React from "react";
import Img from "../assets/image2.png";
import "../App.css";
import AllRecipes from "../components/AllRecipes";

function Home() {
  return (
    <div>
      <section className="home">
        <div className="left">
          <h1>Welcome to the Recipe App</h1>
          <p>Discover and share delicious recipes from around the world.</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="right">
          <img src={Img} alt="Recipe" width={350} height={350} />
        </div>
      </section>
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,256L60,250.7C120,245,240,235,360,234.7C480,235,600,245,720,245.3C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <AllRecipes />
    </div>
  );
}

export default Home;
