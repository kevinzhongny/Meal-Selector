import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recipes() {
    const [recipes, setRecipes] = useState(null);

    async function getRecipes() {
        try {
            const res = await axios.get('http://localhost:8080/recipes');
            setRecipes(res.data);
        } catch(e) {
            console.error(e, e.message);
        }
    }

    useEffect(() => {
        getRecipes();
    }, [])

    return(
        <div>
            { recipes && recipes.map(recipe => <Recipe recipe= { recipe } />)}
        </div>
    )
}

function Recipe({ recipe }) {
    return(
        <div>
            <li key = { recipe.id }>
                <h4>
                    <ul>Name: { recipe.name }</ul>
                    <ul>Cuisine: { recipe.cuisine }</ul>
                    <ul>Ingredients: { recipe.ingredient1 }, { recipe.ingredient2 }, { recipe.ingredient3 }, { recipe.ingredient4 }, { recipe.ingredient5 }</ul>
                    <ul><a href={ recipe.url }>{ recipe.url }</a></ul>
                </h4>
            </li>
        </div>
    )
}

export default Recipes;