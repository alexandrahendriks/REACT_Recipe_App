import { useState } from "react";
import { Center, Container, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchRecipe } from "../components/SearchRecipe";
import { RecipeChoice } from "../components/RecipeChoice";

export const RecipesPage = () => {
  const [useRecipe, setUserRecipe] = useState();
  const title = "Winc Recipe Checker";

  return (
    <Container
      backgroundColor="rgb(22, 127, 180)"
      maxWidth="100vw"
      minHeight="100vh"
      textAlign="center"
    >
      {useRecipe ? (
        <>
          <RecipeChoice recipe={useRecipe} onClick={setUserRecipe} />
        </>
      ) : (
        <>
          <Center
            pt="40px"
            pb="80px"
            display="flex"
            flexDir="column"
            justifyContent="center"
          >
            <Heading mb="25px" color="white">
              {title}
            </Heading>
            <SearchRecipe recipes={data.hits} onClick={setUserRecipe} />
          </Center>
        </>
      )}
    </Container>
  );
};
