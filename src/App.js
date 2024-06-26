import React from "react";

import "./App.css";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import logo from "./assets/image-omelette.jpeg";
import Table from "./components/Table";
import Header from "./components/Header";

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese",
  "diced vegetables, cooked meats",
  "herbs",
];
const prepTime = [
  "Total: Approximately 10 minutes",
  "Preparation: 5 minutes",
  " Cooking: 5 minutes",
];

function App() {
  
  return ( 
    <div className="App">
      <body>
      <div className="container">
          <img src={logo} alt="Logo" />
        </div>
        <div>
      <Header title={"Simple Omelette Recipe"} description={"An easy and quick dish. perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."} />
     
      </div>

      <section className="section">
          <h3>Preparation time</h3>
          {prepTime.map((prepTime) => (
            <li key={prepTime}>{prepTime}</li>
          ))}
        </section>

        <div>
          <h2>Ingredients</h2>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </div>

<h2>Instructions</h2>
<Instructions description={"Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed."} />
<Instructions description={"You can add a tablespoon of water or milk for a fluffier texture."} />
<Instructions description={"Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil."} />
<Instructions description={"Cook the omelette: Once the butter is melted and bubbling, pour in the eggs.Tilt the pan to ensure the eggs evenly coat the surface."} />
<Instructions description={"Tilt the pan to ensure the eggs evenly coat the surface."} />
<Instructions description={"Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."} />
<Instructions description={"Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.Enjoy: Serve hot, with additional salt and pepper if needed."} /> 

<Nutrition />
<Table />
</body>
</div>
);  
     
}
export default App;
