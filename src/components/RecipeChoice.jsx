import { Button } from "./UI/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <div className="recipe">
      <Button onClick={() => onClick()} variant="ghost" />

      <div className="container">
        <img
          className="photo"
          src={recipe.image}
          alt=""
          width="300px"
          height="200px"
        />
        <div className="wrapper">
          <div className="left-side">
            <h2>{recipe.mealType}</h2>
            <h1>{recipe.label}</h1>
            <h3>Total cooking time: {recipe.totalTime}</h3>
            <h3>Servings: {recipe.yield}</h3>
            <h2>Ingerdients:</h2>
            <p>{recipe.ingredientLines.join(" / ")}</p>
          </div>
          <div className="right-side">
            <h2>Health Labels:</h2>
            <p>{recipe.healthLabels.join(" / ")}</p>
            <h2>Diet:</h2>
            <p>{recipe.dietLabels.join(" / ")}</p>
            <h2>Cautions:</h2>
            <p>{recipe.cautions.join(" / ")}</p>
            <h2>Total nutrients:</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};
