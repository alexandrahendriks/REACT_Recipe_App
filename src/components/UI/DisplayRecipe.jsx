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
      backgroundColor={"white"}
      flexDirection={"column"}
      marginBottom={"20px"}
      borderTopRadius={"10px"}
      borderBottomRadius={"10px"}
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
        width="330px"
        height="200px"
      />
      <Box
        className="text"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        pt={"20px"}
        pb={"20px"}
      >
        <Badge className="meal-type" color={"grey"} backgroundColor={"white"}>
          {mealType}
        </Badge>
        <Box
          className="name-of-food"
          display={"flex"}
          flexfontSize={"20px"}
          fontWeight={"bold"}
        >
          {label}
        </Box>
        <Box
          className="wrapper-healt-and-diet-labels"
          display={"flex"}
          flexDirection={"column"}
          rowGap={"5px"}
          mt={"10px"}
          mb={"10px"}
        >
          <Badge className="diet-labels">{dietLabels}</Badge>
          <Badge className="health-labels">{healthLabels}</Badge>
        </Box>

        <Box className="dish-type">Dish: {dishType}</Box>
        <Box
          className="cautions-title"
          display={"flex"}
          flexDirection={"column"}
        >
          Cautions:
          <Badge className="cautions">{cautions}</Badge>
        </Box>
      </Box>
    </Flex>
  );
};

/*GOOD*/
