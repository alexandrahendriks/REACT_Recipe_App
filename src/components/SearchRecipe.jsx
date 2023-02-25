import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DisplayRecipes } from "./DisplayRecipes";
import { TextInput } from "./UI/TextInput";

export const SearchRecipe = ({ recipes, onClick }) => {
  const [searchField, setSearchField] = useState("");

  //Filter recipes on name and health labels
  const matchedRecipes = recipes.filter((recipe) => {
    return (
      recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      recipe.recipe.healthLabels.includes((label) =>
        label.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  });
  //Setting state from input field
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} />
      <Flex
        className="display-recipes-flex"
        ml={"15px"}
        mr={"15px"}
        justifyContent="center"
      >
        <DisplayRecipes onClick={onClick} recipes={matchedRecipes} />
      </Flex>
    </>
  );
};

//DONE!!!!
