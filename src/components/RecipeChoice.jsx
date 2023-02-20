import {
  Image,
  Container,
  Box,
  Badge,
  Heading,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { Button } from "./UI/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Container
      className="recipe"
      backgroundColor={"white"}
      maxWidth="70vw"
      minHeight={"100vh"}
      padding="0px"
    >
      <Button
        onClick={() => onClick()}
        variant="ghost"
        marginTop="15px"
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
        margin="0"
      >
        <Box
          className="left-side"
          display={"flex"}
          flexDirection={"column"}
          alignItems="flex-start"
        >
          <Badge>{recipe.mealType}</Badge>
          <Heading fontSize={"16px"}>{recipe.label}</Heading>
          <Text>Total cooking time: {recipe.totalTime} minutes</Text>
          <Text>Servings: {recipe.yield}</Text>
          <Heading fontSize={"12px"}>Ingerdients:</Heading>
          <Container>
            {recipe.ingredientLines.map((item) => {
              return <WrapItem key={item}>{item}</WrapItem>;
            })}
          </Container>
        </Box>
        <Container
          className="right-side"
          display={"flex"}
          flexDirection={"column"}
          overflow="hidden"
        >
          <Heading fontSize={"12px"}>Health Labels:</Heading>
          <Container>
            {recipe.healthLabels.map((label) => {
              return <Badge key={label}>{label}</Badge>;
            })}
          </Container>
          <Heading fontSize={"12px"}>Diet:</Heading>
          <Container display={"flex"} flexDirection="row" flexWrap={"wrap"}>
            {recipe.dietLabels.map((label) => {
              return <Badge key={label}>{label}</Badge>;
            })}
          </Container>

          <Heading fontSize={"12px"}>Cautions:</Heading>
          <Container>
            {recipe.cautions.map((label) => {
              return <Badge key={label}>{label}</Badge>;
            })}
          </Container>
          <Heading fontSize={"12px"}>Total nutrients:</Heading>
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
            {recipe.totalNutrients.SUGAR.label}:
            {Math.round(recipe.totalNutrients.SUGAR.quantity)}
            {recipe.totalNutrients.SUGAR.unit}
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
