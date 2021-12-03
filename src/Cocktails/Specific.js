import React, { useCallback } from "react";
import Loading from "../Cocktails/Loading";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState({});

  const getItem = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          idDrink: Id,
          strAlcoholic: Info,
          strCategory: Category,
          strDrink: Name,
          strDrinkThumb: image,
          strGlass: Glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newItem = {
          Id,
          Info,
          Category,
          Name,
          image,
          Glass,
          ingredients,
        };
        setCocktail(newItem);
        setLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    getItem();
  }, [id, getItem]);

  const { ingredients, Info, Category, Name, image, Glass } = cocktail;
  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <h2 className="text-center">
        <Link className="btn btn-success" to="/">
          Back_Home
        </Link>
      </h2>
      <h1 className="display2 text-center">{Name} </h1>
      <div className="single-coctail-container">
        <Card className="one-cocktail">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Name:{Name}</Card.Title>
            <Card.Text>Info:{Info}</Card.Text>
            <Card.Text>Category:{Category}</Card.Text>
            <Card.Text>Glass:{Glass}</Card.Text>
            <Card.Text>
              Ingredients:{ingredients[(0, 1)]}
              {/* {ingredients
                .filter((item) => item)
                .map((item, index) => (
                  <span className=" ingredient" key={index}>
                    {item}
                  </span>
                ))} */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default SingleCocktail;
