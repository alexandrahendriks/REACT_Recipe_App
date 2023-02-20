import { useState } from "react";
import { Center, Container, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchRecipe } from "../components/SearchRecipe";
import { RecipeChoice } from "../components/RecipeChoice";

export const RecipesPage = () => {
  const [useRecipe, setUserRecipe] = useState();
  const title = "Recipe Finder App";

  return (
    <Container className="App" maxWidth={"100vw"}>
      {useRecipe ? (
        <>
          <RecipeChoice recipe={useRecipe} onClick={setUserRecipe} />
        </>
      ) : (
        <>
          <Center
            paddingTop="50px"
            backgroundColor={"rgb(69, 198, 241)"}
            flexDir="column"
          >
            <Heading marginBottom={"20px"}>{title}</Heading>
            <SearchRecipe recipes={data.hits} onClick={setUserRecipe} />
          </Center>
        </>
      )}
    </Container>
  );
};
