import React from "react";
import { useGlobalContext } from "./AppContext";
import Cocktail from "./Cocktail";
const Cocktails = () => {
  const { cocktails } = useGlobalContext();

  if (cocktails.length < 1) {
    return (
      <h1 className="text-center"> No cocktails match your search criteria</h1>
    );
  }
  return (
    <div className="cocktail-wrapper">
      <h1 className="text-center display2 text-primary">Cocktails</h1>
      <section className="cocktails-container">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default Cocktails;
