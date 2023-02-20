import { DisplayRecipe } from "./UI/DisplayRecipe";

export const DisplayRecipes = ({ recipes, onClick }) => {
  return (
    <div className="recipes-grid">
      {recipes.map((recipe) => (
        <DisplayRecipe
          key={recipe.recipe.url}
          id={recipe.recipe.url}
          recipe={recipe.recipe}
          onClick={onClick}
          image={recipe.recipe.image}
          label={recipe.recipe.label}
          dietLabels={recipe.recipe.dietLabels.join(" / ")}
          cautions={recipe.recipe.cautions.join(" / ")}
          mealType={recipe.recipe.mealType}
          dishType={recipe.recipe.dishType}
          healthLabels={recipe.recipe.healthLabels
            .filter((label) => label === "Vegetarian" || label === "Vegan")
            .join(" / ")}
        />
      ))}
    </div>
  );
};

/*GOOD*/
