import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App.css';

const App = () => {
  const APP_ID = "688a5c81";
  const APP_KEY = "05fe4dc18056369baae110ef2a74358b";

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); 
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipes => (
        <Recipes title={recipes.recipes.label} calories />
      ))};
    </div>
  );
};

export default App;