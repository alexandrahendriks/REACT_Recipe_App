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
      maxWidth={{ base: "95vw", md: "70vw" }}
      minHeight={{ base: "140vh", md: "110vh" }}
      padding="0px"
      ml={{ base: "auto", md: "auto", lg: "auto", xl: "auto" }}
      mr={{ base: "auto" }}
    >
      <Button //GOOD
        className="back-button"
        onClick={() => onClick()}
        display="flex"
        variant="ghost"
        marginBottom="15px"
      />
      <Image //GOOD
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
        columnGap={{ md: "5" }}
        alignItems={"flex-start"}
        justifyContent="flex-start"
        mt="15px"
      >
        <Box
          className="left-side"
          display={"flex"}
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="flex-start"
          textAlign={"left"}
          mb="20px"
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
          <Text className="servings" fontSize={"14px"} mb="10px">
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
            fontSize={"14px"}
            fontWeight="normal"
            mb="5px"
          >
            Health Labels:
          </Heading>
          <Flex flexWrap={"wrap"} columnGap="2" rowGap={"1"} mb="10px">
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
          <Heading
            className="recipe-diet-title"
            fontSize={"14px"}
            fontWeight="normal"
            mb="5px"
          >
            Diet:
          </Heading>
          <Flex
            className="diet-title-labels"
            flexWrap={"wrap"}
            columnGap="2"
            rowGap={"1"}
            mb="10px"
          >
            {recipe.dietLabels.map((label) => {
              return (
                <Badge
                  className="diet-title-label"
                  backgroundColor={"#C6F6D5"}
                  key={label}
                >
                  {label}
                </Badge>
              );
            })}
          </Flex>

          <Heading
            className="recipe-cautions"
            fontSize={"14px"}
            fontWeight="normal"
            mb="5px"
          >
            Cautions:
          </Heading>
          <Flex
            className="recipe-cautions-labels"
            flexWrap={"wrap"}
            columnGap="2"
            rowGap={"1"}
            mb="10px"
          >
            {recipe.cautions.map((label) => {
              return (
                <Badge
                  className="recipe-cautions-label"
                  backgroundColor={"#FC8181"}
                  key={label}
                >
                  {label}
                </Badge>
              );
            })}
          </Flex>
          <Heading
            className="recipe-total-nutrients-title"
            fontSize={"14px"}
            mb="10px"
          >
            Total nutrients:
          </Heading>
          <Flex
            flexDirection={"row"}
            flexWrap="wrap"
            columnGap={"3"}
            rowGap="1"
            mb="15px"
          >
            <Flex flexDirection={"column"} justifyContent="space-evenly">
              <Flex>
                {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
              </Flex>
              <Text fontWeight={"bold"} fontSize="12px">
                CALORIES
              </Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Flex>
                {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                {recipe.totalNutrients.CHOCDF.unit}
              </Flex>
              <Text fontWeight={"bold"} fontSize="12px">
                {recipe.totalNutrients.CHOCDF.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Flex>
                {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                {recipe.totalNutrients.PROCNT.unit}
              </Flex>
              <Text fontWeight={"bold"} fontSize="12px">
                {recipe.totalNutrients.PROCNT.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Flex>
                {Math.round(recipe.totalNutrients.FAT.quantity)}
                {recipe.totalNutrients.FAT.unit}
              </Flex>
              <Text fontWeight={"bold"} fontSize="12px">
                {recipe.totalNutrients.FAT.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Flex>
                {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                {recipe.totalNutrients.CHOLE.unit}
              </Flex>
              <Text fontWeight={"bold"} fontSize="12px">
                {recipe.totalNutrients.CHOLE.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDirection={"column"}>
              <Flex>
                {Math.round(recipe.totalNutrients.NA.quantity)}
                {recipe.totalNutrients.NA.unit}
              </Flex>
              <Text fontWeight={"bold"} fontSize="12px">
                {recipe.totalNutrients.NA.label.toUpperCase()}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Container>
    </Container>
  );
};
