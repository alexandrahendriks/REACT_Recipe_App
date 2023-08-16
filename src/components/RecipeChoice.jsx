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
import React, { useEffect } from "react";

export const RecipeChoice = ({ recipe, onClick }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      backgroundColor="white"
      maxWidth={{ base: "95vw", sm: "80vw", md: "70vw" }}
      minHeight={{ base: "140vh", sm: "110vh", md: "110vh" }}
      padding="0px"
      ml="auto"
      mr="auto"
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
        mb="15px"
      />
      <Container
        display="flex"
        flexDirection="row"
        columnGap={{ sm: "2", md: "5", lg: "5" }}
        justifyContent="center"
        flexBasis="auto"
        flexGrow="1"
        flexShrink="0"
        m="auto"
      >
        <Box
          display="flex"
          flexDirection="column"
          textAlign="left"
          flexGrow="1"
          flexShrink="0"
          flexBasis={{ base: "100px", sm: "100px", md: "200px", lg: "300px" }}
          mb="20px"
        >
          <Badge
            color="grey"
            backgroundColor="white"
            fontSize={{ base: "12px", lg: "14px" }}
            padding="0px"
            mb="5px"
          >
            {recipe.mealType}
          </Badge>
          <Heading fontSize={{ base: "18px", lg: "22px" }} mb="5px">
            {recipe.label}
          </Heading>
          <Box mb="10px" fontSize={{ base: "14px", lg: "16px" }}>
            Dish type:
            <Badge
              mb="3px"
              backgroundColor="white"
              fontSize={{ base: "14px", lg: "16px" }}
              fontWeight="normal"
            >
              {recipe.dishType}
            </Badge>
          </Box>
          <Text
            lineHeight="normal"
            fontSize={{ base: "14px", lg: "16px" }}
            mb="10px"
          >
            Total cooking time: {recipe.totalTime} minutes
          </Text>
          <Text fontSize={{ base: "14px", lg: "16px" }} mb="10px">
            Servings: {recipe.yield}
          </Text>
          <Heading fontSize={{ base: "16px", lg: "18px" }} mb="5px">
            Ingerdients:
          </Heading>
          {recipe.ingredientLines.map((item) => {
            return (
              <WrapItem fontSize={{ base: "15px", lg: "18px" }} key={item}>
                {item}
              </WrapItem>
            );
          })}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          flexGrow="1"
          flexShrink="0"
          flexBasis={{ base: "100px", sm: "100px", md: "300px", lg: "300px" }}
          textAlign="left"
        >
          <Heading
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="normal"
            mb="5px"
          >
            Health Labels:
          </Heading>
          <Flex flexWrap="wrap" columnGap="2" rowGap="2" mb="10px">
            {recipe.healthLabels.map((label) => {
              return (
                <Badge fontSize="12px" backgroundColor="#D6BCFA" key={label}>
                  {label}
                </Badge>
              );
            })}
          </Flex>
          <Heading
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="normal"
            mb="5px"
          >
            Diet:
          </Heading>
          <Flex flexWrap="wrap" columnGap="2" rowGap="2" mb="10px">
            {recipe.dietLabels.map((label) => {
              return (
                <Badge
                  className="diet-title-label"
                  backgroundColor="#C6F6D5"
                  fontSize="12px"
                  key={label}
                >
                  {label}
                </Badge>
              );
            })}
          </Flex>

          <Heading
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight="normal"
            mb="5px"
          >
            Cautions:
          </Heading>
          <Flex flexWrap="wrap" columnGap="2" rowGap="2" mb="10px">
            {recipe.cautions.map((label) => {
              return (
                <Badge backgroundColor="#FC8181" fontSize="12px" key={label}>
                  {label}
                </Badge>
              );
            })}
          </Flex>
          <Heading fontSize={{ base: "14px", lg: "16px" }} mb="10px">
            Total nutrients:
          </Heading>
          <Flex
            flexDir="row"
            wrap="wrap"
            justify="flex-start"
            columnGap={{ base: "3", lg: "5" }}
            rowGap="1"
            mb="15px"
          >
            <Flex flexDir="column" justify="space-evenly">
              <Flex fontSize={{ base: "14px", lg: "16px" }}>
                {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
              </Flex>
              <Text fontWeight="bold" fontSize={{ base: "11px", lg: "14px" }}>
                CALORIES
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Flex fontSize={{ base: "14px", lg: "16px" }}>
                {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                {recipe.totalNutrients.CHOCDF.unit}
              </Flex>
              <Text fontWeight="bold" fontSize={{ base: "11px", lg: "14px" }}>
                {recipe.totalNutrients.CHOCDF.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Flex fontSize={{ base: "14px", lg: "16px" }}>
                {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                {recipe.totalNutrients.PROCNT.unit}
              </Flex>
              <Text fontWeight="bold" fontSize={{ base: "11px", lg: "14px" }}>
                {recipe.totalNutrients.PROCNT.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Flex fontSize={{ base: "14px", lg: "16px" }}>
                {Math.round(recipe.totalNutrients.FAT.quantity)}
                {recipe.totalNutrients.FAT.unit}
              </Flex>
              <Text fontWeight="bold" fontSize={{ base: "11px", lg: "14px" }}>
                {recipe.totalNutrients.FAT.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Flex fontSize={{ base: "14px", lg: "16px" }}>
                {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                {recipe.totalNutrients.CHOLE.unit}
              </Flex>
              <Text fontWeight="bold" fontSize={{ base: "11px", lg: "14px" }}>
                {recipe.totalNutrients.CHOLE.label.toUpperCase()}
              </Text>
            </Flex>
            <Flex flexDir="column">
              <Flex fontSize={{ base: "14px", lg: "16px" }}>
                {Math.round(recipe.totalNutrients.NA.quantity)}
                {recipe.totalNutrients.NA.unit}
              </Flex>
              <Text fontWeight="bold" fontSize={{ base: "11px", lg: "14px" }}>
                {recipe.totalNutrients.NA.label.toUpperCase()}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Container>
  );
};
