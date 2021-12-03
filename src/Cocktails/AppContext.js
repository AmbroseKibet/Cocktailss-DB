import React, { useCallback } from "react";
import { useState, useEffect, useContext } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const getDrinks = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strDrinkThumb,
          } = item;
          return {
            id: idDrink,
            Drink: strDrink,
            Category: strCategory,
            info: strAlcoholic,
            Glass: strGlass,
            img: strDrinkThumb,
          };
        });
        setCocktails(newDrinks);
        setLoading(false);
      } else {
        setLoading(false);
        return (
          <h1 className="text-Center"> No drinks matches your criteria</h1>
        );
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    getDrinks();
  }, [searchTerm, getDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, setLoading, searchTerm, setSearchTerm, cocktails }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  const GlobalContext = useContext(AppContext);

  return GlobalContext;
};
export { useGlobalContext };
export { AppProvider };
