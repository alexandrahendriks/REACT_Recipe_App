import {
  Image,
  Container,
  Box,
  Badge,
  Heading,
  Text,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { Button } from "./UI/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Container
      className="recipe"
      backgroundColor={"white"}
      maxWidth="95vw"
      minHeight={"100vh"}
      padding="0px"
      ml={"10px"}
      mr={"10px"}
      overflow={"auto"}
    >
      <Button
        className="back-button"
        onClick={() => onClick()}
        display="flex"
        variant="ghost"
        marginBottom="15px"
      />
      <Image
        className="photo"
        src={recipe.image}
        alt=""
        width="100%"
        height="200px"
        objectFit="cover"
      />

      <Container
        className="wrapper"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        justifyContent="flex-start"
        margin="0"
        mt="15px"
        mb="15px"
      >
        <Box
          className="left-side"
          display={"flex"}
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="flex-start"
          textAlign={"left"}
        >
          <Badge
            className="recipe-meal-type"
            color={"grey"}
            backgroundColor={"white"}
            padding="0px"
            mb="5px"
          >
            {recipe.mealType}
          </Badge>
          <Heading className="recipe-name" fontSize={"18px"} mb={"5px"}>
            {recipe.label}
          </Heading>
          <Text
            className="cooking-time"
            lineHeight={"normal"}
            fontSize={"14px"}
          >
            Total cooking time: {recipe.totalTime} minutes
          </Text>
          <Text className="servings" fontSize={"14px"}>
            Servings: {recipe.yield}
          </Text>
          <Heading className="ingerdients-title" fontSize={"16px"} mb="5px">
            Ingerdients:
          </Heading>
          {recipe.ingredientLines.map((item) => {
            return (
              <WrapItem className="ingredient" m={"0px"} key={item}>
                {item}
              </WrapItem>
            );
          })}
        </Box>
        <Container
          className="right-side"
          display={"flex"}
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="flex-start"
          textAlign={"left"}
        >
          <Heading
            className="recipe-health-labels-title"
            fontSize={"13px"}
            fontWeight="normal"
          >
            Health Labels:
          </Heading>
          <Flex flexWrap={"wrap"} columnGap="2" rowGap={"1"}>
            {recipe.healthLabels.map((label) => {
              return (
                <Badge
                  className="recipe-health-label"
                  fontSize={"12px"}
                  backgroundColor={"#D6BCFA"}
                  key={label}
                >
                  {label}
                </Badge>
              );
            })}
          </Flex>
          <Heading className="recipe-diet-title" fontSize={"12px"}>
            Diet:
          </Heading>
          <Container
            className="diet-title-labels"
            display={"flex"}
            flexDirection="row"
            flexWrap={"wrap"}
          >
            {recipe.dietLabels.map((label) => {
              return (
                <Badge className="diet-title-label" key={label}>
                  {label}
                </Badge>
              );
            })}
          </Container>

          <Heading className="recipe-cautions" fontSize={"12px"}>
            Cautions:
          </Heading>
          <Container className="recipe-cautions-labels">
            {recipe.cautions.map((label) => {
              return (
                <Badge className="recipe-cautions-label" key={label}>
                  {label}
                </Badge>
              );
            })}
          </Container>
          <Heading className="recipe-total-nutrients-title" fontSize={"12px"}>
            Total nutrients:
          </Heading>
          <div>
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </div>
          <div>
            {recipe.totalNutrients.CHOCDF.label}:
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </div>
          <div>
            {recipe.totalNutrients.PROCNT.label}:
            {Math.round(recipe.totalNutrients.PROCNT.quantity)}
            {recipe.totalNutrients.PROCNT.unit}
          </div>
          <div>
            {recipe.totalNutrients.FAT.label}:
            {Math.round(recipe.totalNutrients.FAT.quantity)}
            {recipe.totalNutrients.FAT.unit}
          </div>
          <div>
            {recipe.totalNutrients.CHOLE.label}:
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </div>
          <div>
            {recipe.totalNutrients.NA.label}:
            {Math.round(recipe.totalNutrients.NA.quantity)}
            {recipe.totalNutrients.NA.unit}
          </div>
        </Container>
      </Container>
    </Container>
  );
};
