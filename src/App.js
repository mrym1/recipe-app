import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import axios from "axios";

function App() {
  const APP_ID = "738d88cb";
  const APP_KEY = "fd4b811abcbb620397fa2e2e04bc052c";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("pasta");

  useEffect(() => {
    const getRecipes = async () => {
      axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res => {
          const data = res.data;
          setRecipes( data.hits);
        
        }).catch((error)=> {
      console.log(error); 
    });
      // const response = await fetch(
      //   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      // );
      // const data = await response.json();
      // setRecipes(data.hits);
    };
    getRecipes();
  }, [query])



  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
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
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.id}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
