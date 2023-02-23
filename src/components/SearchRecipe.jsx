import { Grid, Center } from "@chakra-ui/react";
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
    <>
      <TextInput className="input-field" onChange={handleChange} />
      <Grid
        className="grid-continer-recipes"
        gridTemplateColumns={"repeat(1, 1fr)"}
        gridTemplateRows={"auto"}
        marginLeft={"15px"}
        mr="10px"
      >
        <DisplayRecipes
          className="displaying-all-recipes"
          onClick={onClick}
          recipes={matchedRecipes}
        />
      </Grid>
    </>
  );
};
