import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DisplayRecipes } from "./DisplayRecipes";
import { TextInput } from "./UI/TextInput";

export const SearchRecipe = ({ recipes, onClick }) => {
  const [searchField, setSearchField] = useState("");

  //Filter recipes on name
  const matchedRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });
  //Setting state from input field
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} />
      <Flex ml="15px" mr="15px">
        <DisplayRecipes onClick={onClick} recipes={matchedRecipes} />
      </Flex>
    </>
  );
};
