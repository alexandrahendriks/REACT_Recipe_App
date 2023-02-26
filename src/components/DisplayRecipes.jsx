import { Grid, Flex } from "@chakra-ui/react";
import { DisplayRecipe } from "./UI/DisplayRecipe";

export const DisplayRecipes = ({ recipes, onClick }) => {
  return (
    <Flex
      className="flex-wrapper"
      flexDir={{ base: "column", md: "row" }}
      flexWrap={"wrap"}
      width={"100%"}
      flexBasis="50px"
      grow={"1"}
      shrink="0"
      columnGap={"8"}
      m="10px"
      justifyContent={"space-evenly"}
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

{
  /* <Grid
  className="recipes-grid"
  gridTemplateColumns={{
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)",
  }}
  gridTemplateRows={"auto"}
  gap={3}
  justifyContent={{ lg: "center" }}
></Grid>;
 */
}
