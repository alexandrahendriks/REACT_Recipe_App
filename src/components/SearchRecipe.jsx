import { useState } from "react";
import { DisplayRecipes } from "./DisplayRecipes";
import { TextInput } from "./UI/TextInput";

export const SearchRecipe = ({ recipes, onClick }) => {
  const [searchField, setSearchField] = useState("");

  //Filter recipes on name and health labels -- WORKS
  const matchedRecipes = recipes.filter((recipe) => {
    return (
      recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      recipe.recipe.healthLabels.includes((label) =>
        label.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      <>
        <label>Search for recipes:</label>
        <TextInput onChange={handleChange} />
        <DisplayRecipes onClick={onClick} recipes={matchedRecipes} />
      </>
    </div>
  );
};

// Doesn't filter right away down to item
