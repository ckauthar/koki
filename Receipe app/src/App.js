import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App.css';

const App = () => {
  const APP_ID = "688a5c81";
  const APP_KEY = "05fe4dc18056369baae110ef2a74358b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); 
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text"
          value={search}
          onChange={updateSearch} 
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipes => (
        <Recipes 
          key={recipes.recipes.label}
          title={recipes.recipes.label} 
          calories={recipes.recipes.calories} 
          image={recipes.recipes.image} 
          ingredients={recipes.recipes.ingredients} 
        />
      ))}
      </div>
    </div>
  );
};

export default App;