import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import { API_ID, API_KEY } from './config';

const Recipe = () => {
  const APP_ID = API_ID;
  const APP_KEY = API_KEY; 

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); // State for indicating loading state

  const searchRecipes = async () => {
    setLoading(true); // Show the spinner while loading
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error when fetching recipes:', error);
    } finally {
      setLoading(false); // Hide the spinner after loading
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchRecipes();
  };

  return (
    <div className="recipe">
        <Container className="my-5 fluid">
          <Row className='pt-5'>
              <h1 className="mb-4 recipe-heading1">What is your favorite food? Enter the food name to find out the recipe</h1>
              <h2 className='mb-4 recipe-heading2'>For the best diet, also know the nutrition of the food!</h2>
          </Row>

          <div className="recipe-search-input">
            <Row className="justify-content-center my-4">
              <Col xs={12} lg={8}>
                <form onSubmit={handleSearch}>
                  <div className="d-flex">
                    <input
                      type="text"
                      className="recipe-input-form-control flex-grow-1 me-2"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Enter a Food or Recipe"
                    />
                    <button type="submit" className="searchbtn">
                      Search
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
          
          <div className="recipe-seach-result">
            {loading ? ( // Show spinner if loading
              <Row className="text-center mt-4">
                <Col>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </Col>
              </Row>
            ) : (
              recipes.map((recipe) => (
                <Row key={recipe.recipe.uri} className="recipe-card m-3">
                  <Col className='recipe-card-left' xs={12} lg={6}>
                    <Row className='recipe-card-image'> 
                      <img src={recipe.recipe.image} alt={recipe.recipe.label} className='recipe-image'></img>
                    </Row>
                  </Col>
                  <Col className='recipe-card-right' xs={12} lg={6}>

                    <Row className='recipe-title'>
                      <h1 className='recipe-card-title'>{recipe.recipe.label}</h1>
                      <p className='kcal'>{Math.round(recipe.recipe.calories)} Kcal / {recipe.recipe.yield} Servings</p>
                    </Row>

                    <Row className='recipe-ingredient-row'>
                      <h2 className='recipe-card-heading2'>Ingredients:</h2>
                      <Col className='py-3'>
                        <Row className='recipe-ingredient-row'> 
                          <Col className=''>
                            <ul>{recipe.recipe.ingredients.map((ingredient) => (
                              <li className='recipe-ingredient-li' key={ingredient.text}>{ingredient.text}</li> 
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row className='recipe-step my-3'>
                        <a className='recipe-link' href={recipe.recipe.url} target="_blank" rel="noreferrer">
                          <button className='recipe-step-button'>How to Cook?</button>
                        </a>  
                    </Row>
                
                    <Row className='recipe-nurtients'>
                      <h2 className='recipe-card-heading2'>Nutritions:</h2>
                      <Col className='py-3'>
                        <p className='recipe-nurtients-text'><b>Carbs:</b> {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} {recipe.recipe.totalNutrients.CHOCDF.unit}</p>
                        <p className='recipe-nurtients-text'><b>Protein:</b> {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} {recipe.recipe.totalNutrients.PROCNT.unit}</p>
                        <p className='recipe-nurtients-text'><b>Fat:</b> {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} {recipe.recipe.totalNutrients.FAT.unit}</p>
                        <p className='recipe-nurtients-text'><b>Cholesterol:</b> {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} {recipe.recipe.totalNutrients.CHOLE.unit}</p>
                        <p className='recipe-nurtients-text'><b>Sodium:</b> {Math.round(recipe.recipe.totalNutrients.NA.quantity)} {recipe.recipe.totalNutrients.NA.unit}</p>
                      </Col>
                      <Col className='py-3'>
                        <p className='recipe-nurtients-text'><b>Calcium:</b> {Math.round(recipe.recipe.totalNutrients.CA.quantity)} {recipe.recipe.totalNutrients.CA.unit}</p>
                        <p className='recipe-nurtients-text'><b>Magnesium:</b> {Math.round(recipe.recipe.totalNutrients.MG.quantity)} {recipe.recipe.totalNutrients.MG.unit}</p>
                        <p className='recipe-nurtients-text'><b>Potassium:</b> {Math.round(recipe.recipe.totalNutrients.K.quantity)} {recipe.recipe.totalNutrients.K.unit}</p>
                        <p className='recipe-nurtients-text'><b>Iron:</b> {Math.round(recipe.recipe.totalNutrients.FE.quantity)} {recipe.recipe.totalNutrients.FE.unit}</p>
                        <p className='recipe-nurtients-text'><b>Water:</b> {Math.round(recipe.recipe.totalNutrients.WATER.quantity)} {recipe.recipe.totalNutrients.WATER.unit}</p>
                      </Col>
                    </Row>

                  </Col>
                </Row>
              ))
            )}
          </div>
        </Container>
      </div>
  );
};

export default Recipe;