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
      className="App"
      padding={"0px"}
      backgroundColor={"rgb(22, 127, 180)"}
      maxWidth={"100vw"}
      minHeight={"100vh"}
      textAlign={"center"}
    >
      {useRecipe ? (
        <>
          <RecipeChoice
            className="chosen-recipe-page"
            recipe={useRecipe}
            onClick={setUserRecipe}
          />
        </>
      ) : (
        <>
          <Center
            className="the-whole-recipes-page"
            pt="30px"
            pb="80px"
            display={"flex"}
            flexDir="column"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Heading className="title" marginBottom={"25px"} color="white">
              {title}
            </Heading>
            <SearchRecipe
              className="inputfield-and-displaying-recipes"
              recipes={data.hits}
              onClick={setUserRecipe}
            />
          </Center>
        </>
      )}
    </Container>
  );
};
