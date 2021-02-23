import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Meal_Selector() {

    const [recipe, setRecipes] = useState(null);

    async function getRecipes() {
        try {
            const res = await axios.get('http://localhost:8080/recipes');
            const recipeNum = Math.floor(Math.random() * res.data.length);
            const randomRecipe = res.data[recipeNum];
            // console.log(randomRecipe);
            setRecipes(randomRecipe);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        getRecipes();
    }

    return(
        <div>
            <button onClick= { (e) => handleSubmit(e)} className="selector-button">Meal Selector</button>
            { recipe && <Recipe recipe= { recipe } key= { recipe.id }/>}
        </div>
    )
}

function Recipe({ recipe }) {
    return(
        <div>
            <form>
                <span>
                    <ul>
                        <b>Name:</b> { recipe.name }<br></br>
                        <b>Cuisine:</b> { recipe.cuisine }<br></br>
                        <b>Ingredients:</b> { recipe.ingredient1 }, { recipe.ingredient2 }, { recipe.ingredient3 }, { recipe.ingredient4 }, { recipe.ingredient5 }<br></br>
                        <a href={ recipe.url }>{ recipe.url }</a><br></br>
                    </ul>
                </span>
            </form>
        </div>
    )
}

export default Meal_Selector;