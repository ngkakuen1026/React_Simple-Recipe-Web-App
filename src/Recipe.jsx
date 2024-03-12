import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
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
        <div className="row justify-content-center mt-4">
          <div className="col-8 col-md-6">
            <form onSubmit={handleSearch} className='mb-5'>
              <div className="input-group">
                <input type="text" className="form-control" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter a Food or Recipe" />
                <button type="submit" className="btn btn-primary searchbtn">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {loading ? ( // Show spinner if loading
            <div className="col-12 text-center mt-4">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            recipes.map((recipe) => (
              <div key={recipe.recipe.uri} className="col-md-4 mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={recipe.recipe.image}
                    alt={recipe.recipe.label}
                    style={{ padding: '5px' }}
                  />
                  <Card.Body>
                    <Card.Title><h1 className='recipe-card-title'>{recipe.recipe.label}</h1></Card.Title>
                    <Card.Text>
                      <p className="kcal">
                        {Math.round(recipe.recipe.calories)} Kcal / {recipe.recipe.yield} Servings
                      </p>
                      <Row className=''>
                        <Col>
                          <p>Carbs: {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}g</p>
                          <p>Protein: {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}g</p>
                          <p>Fat: {Math.round(recipe.recipe.totalNutrients.FAT.quantity)}g</p>
                        </Col>
                        <Col>
                          <p>Cholesterol: {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)}mg</p>
                          <p>Sodium: {Math.round(recipe.recipe.totalNutrients.NA.quantity)}mg</p>
                          <p>Calcium: {Math.round(recipe.recipe.totalNutrients.CA.quantity)}mg</p>
                          <p>Magnesium: {Math.round(recipe.recipe.totalNutrients.MG.quantity)}mg</p>
                          <p>Potassium: {Math.round(recipe.recipe.totalNutrients.K.quantity)}mg</p>
                          <p>Iron: {Math.round(recipe.recipe.totalNutrients.FE.quantity)}mg</p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>

  );
};

export default Recipe;