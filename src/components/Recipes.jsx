import { useState } from "react";

const elevenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elevenGauntletsRecipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};

console.log(elevenShieldRecipe);
console.log(elevenGauntletsRecipe);

export default function Recipes() {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipes</h3>
      <button onClick={() => setRecipe(elevenShieldRecipe)}>
        Eleven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elevenGauntletsRecipe)}>
        Eleven Gauntlets Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material} : {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
}
