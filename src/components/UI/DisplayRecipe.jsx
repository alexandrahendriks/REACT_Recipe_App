import { Badge, Box, Flex, Image } from "@chakra-ui/react";

export const DisplayRecipe = ({
  image,
  label,
  dietLabels,
  cautions,
  mealType,
  dishType,
  healthLabels,
  id,
  onClick,
  recipe,
}) => {
  return (
    <Flex
      className="recipes"
      backgroundColor="white"
      flexDirection={{ base: "column" }}
      marginBottom={"20px"}
      borderTopRadius={"10px"}
      borderBottomRadius={"10px"}
      maxWidth={{ base: "300px" }}
      flexBasis="300px"
      grow="1"
      shrink="0"
      id={id}
      onClick={() => onClick(recipe)}
    >
      <Image
        className="img"
        float={"left"}
        borderTopRadius={"10px"}
        objectFit="cover"
        src={image}
        alt=""
        width="auto"
        height="200px"
      />
      <Box
        className="text"
        display={"flex"}
        flexDirection={"column"}
        //width={"200%"}

        alignItems={"center"}
        pt={"20px"}
        pb={"20px"}
        ml={"10px"}
        mr={"10px"}
      >
        <Badge className="meal-type" color={"grey"} backgroundColor={"white"}>
          {mealType}
        </Badge>
        <Box
          className="name-of-food"
          display={"flex"}
          fontSize={"25px"}
          fontWeight={"bold"}
          width="100%"
          justifyContent={"center"}
        >
          {label}
        </Box>
        <Box
          className="wrapper-diet-labels"
          display={"flex"}
          flexDirection={"row"}
          columnGap={"15px"}
          mt={"10px"}
          mb={"10px"}
        >
          {dietLabels.map((label) => {
            return (
              <Badge
                backgroundColor={"#D6BCFA"}
                borderBottomRadius={"3px"}
                borderTopRadius={"3px"}
                className="diet-labels"
                key={label}
              >
                {label}
              </Badge>
            );
          })}
        </Box>
        <Box
          className="wrapper-healt-labels"
          display={"flex"}
          flexDirection={"row"}
          columnGap={"10px"}
          mb={"10px"}
        >
          {healthLabels.map((label) => {
            return (
              <Badge
                backgroundColor={"#C6F6D5"}
                borderBottomRadius={"3px"}
                borderTopRadius={"3px"}
                className="health-labels"
              >
                {label}
              </Badge>
            );
          })}
        </Box>
        <Flex flexDir={"row"} columnGap={"5px"}>
          <Box className="dish-type">Dish:</Box>
          <Box fontSize={"16px"} fontWeight={"bold"}>
            {dishType}
          </Box>
        </Flex>
        <Box mt="5px">Cautions:</Box>
        <Box
          className="cautions-title"
          display={"flex"}
          flexDirection={"row"}
          columnGap={"10px"}
          mb={"10px"}
          mt="5px"
        >
          {cautions.map((label) => {
            return (
              <Badge
                backgroundColor={"#FC8181"}
                borderBottomRadius={"3px"}
                borderTopRadius={"3px"}
                className="cautions"
              >
                {label}
              </Badge>
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
};

/*GOOD*/
