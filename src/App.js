import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {
  const APP_ID = '23ede1c7';
  const APP_KEY = 'api key here';	

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <h1 className="title">Recipe Finder App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="search by dish type or ingredient" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">Search Recipes</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          originalUrl={recipe.recipe.url} 
          healthLabels={recipe.recipe.healthLabels}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
