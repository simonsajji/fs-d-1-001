import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component
import Grid from '@mui/material/Grid';
import logo from './assets/restaurant.png'
const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('chicken'); // Default search query

  useEffect(() => {
    fetchRecipes();
  }, [searchQuery]); // Fetch recipes whenever the search query changes

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setLoading(false);
    }
  };

  return (
    <div className='p-140'>
      <h2 className='t-a-center pacifico c-gr d-flex align-center j-center'> <img src={logo} alt="" width={30} height={30} /> &nbsp;<span> delicious</span></h2>
      <SearchBar onSearch={setSearchQuery} />
      <div className="recipe-container">
        {loading ? (
          <p>Loading recipes...</p>
        ) : recipes?.length === 0 ? <p className='t-a-center d-flex align-center j-center'>No Recipes found</p> : (
          <Grid container spacing={2}>
            {recipes.map((recipe, index) => (
              <Grid key={index}  item="true" xs={12} sm={6} md={4} xl={3} >
                <div className="recipe-card">
                  <img
                    className="recipe-image"
                    src={recipe.recipe.image}
                    alt={recipe.recipe.label}
                  />
                  <h3 className="recipe-title">{recipe.recipe.label}</h3>
                  {/* <p className="recipe-details">
                    Calories: {recipe.recipe.calories.toFixed(2)}
                  </p>
                  <p className="recipe-details">Servings: {recipe.recipe.yield}</p> */}
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default RecipeApp;