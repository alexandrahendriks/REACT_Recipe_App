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
    <div className="recipes" id={id} onClick={() => onClick(recipe)}>
      <img className="img" src={image} alt="" width="300px" height="200px" />
      <div className="text">
        <h3>{mealType}</h3>
        <h1>{label}</h1>
        <h2>{dietLabels}</h2>
        <h2>{healthLabels}</h2>

        <h2>{dishType}</h2>
        <h2>{cautions}</h2>
      </div>
    </div>
  );
};

/*GOOD*/
