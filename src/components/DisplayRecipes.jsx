import { Flex } from "@chakra-ui/react";
import { DisplayRecipe } from "./UI/DisplayRecipe";

export const DisplayRecipes = ({ recipes, onClick }) => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      wrap="wrap"
      basis="50px"
      grow="1"
      shrink="0"
      columnGap={{ base: "1", sm: "3", md: "3", lg: "5" }}
      m="10px"
      justify="center"
    >
      {recipes.map((recipe) => (
        <DisplayRecipe
          key={recipe.recipe.url}
          id={recipe.recipe.url}
          recipe={recipe.recipe}
          onClick={onClick}
          image={recipe.recipe.image}
          label={recipe.recipe.label}
          dietLabels={recipe.recipe.dietLabels}
          cautions={recipe.recipe.cautions}
          mealType={recipe.recipe.mealType}
          dishType={recipe.recipe.dishType.map(
            (a) => a.charAt(0).toUpperCase() + a.substr(1)
          )}
          healthLabels={recipe.recipe.healthLabels.filter((label) => {
            if (label === "Vegetarian" || label === "Vegan") {
              return label;
            }
          })}
        />
      ))}
    </Flex>
  );
};
