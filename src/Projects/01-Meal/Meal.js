import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import "./Meal.scss";

export default function Home() {
  const [meal, setMeal] = useState({});

  async function getMeal() {
    const response = await (
      await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    ).json();
    const [meals] = response.meals;
    const {
      idMeal,
      strMeal,
      strYoutube,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags
    } = meals;

    const m = {
      idMeal,
      strMeal,
      strYoutube,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      ingredients: []
    };

    for (let i = 1; i <= 20; i++) {
      const ingredient = `${meals[`strIngredient${i}`]}`;
      const measure = `${meals[`strMeasure${i}`]}`;
      if (ingredient && !ingredient.includes('null')) {
        m.ingredients.push(`${ingredient} - ${measure}`);
        console.log(`${ingredient} - ${measure}`)
      }
    }

    setMeal(m);
  }

  const hasMeal = Object.values(meal).length; 

  console.log(meal.strYoutube)

  

  return (
    <div className="Meal">
      <Container>
        <div className={`question center ${hasMeal !== 0 ? "slim" : "soft"}`}>
          <h1>Feeling Hungry?</h1>
          <h3>Get a random meal by clicking below</h3>
          <Button  className='btn btn-primary' onClick={getMeal}>
            Get Meal &ensp;
            <span role="img" aria-label="icon">
              🍔
            </span>
          </Button>
        </div>

        { hasMeal !== 0 && <Row className="Content">
          <Col className="col" xs={5}>
            <img src={meal.strMealThumb}></img>
            <div className="infos">
              <div>
                <span>
                  <strong>Category:</strong> {meal.strCategory}
                </span>
              </div>
              <div>
                <span>
                  <strong>Area:</strong> {meal.strArea}
                </span>
              </div>
              <div>
                <span>
                  <strong>Tags:</strong> {meal.strTags}
                </span>
              </div>
            </div>
            <h3>Ingredients:</h3>
            <ul>
              {meal.ingredients &&
                meal.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
          </Col>
          <Col className="col">
            <h2>{meal.strMeal}</h2>
            <p>{meal.strInstructions}</p>
          </Col>
          <iframe src={meal.strYoutube + '&output=embed'}
        frameBorder='0'
        allowFullScreen
        title='video'
        width="80%" height="400"
/>
        </Row> }

      
        
      </Container>
    </div>
  );
}
